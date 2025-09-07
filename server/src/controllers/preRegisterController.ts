import { Request, Response } from "express";
import prisma from "../../lib/prisma";
import { sendRegistrationEmail } from "../../utils/sendEmail";

export const createPreRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, talent } = req.body;

    if (!name || !email || !talent) {
      return res.status(400).json({ error: "Tüm alanlar zorunludur." });
    }

    const newRegister = await prisma.preRegister.create({
      data: { name, email, talent },
    });

    // ✅ Mail gönderimini arkaya at, cevabı bekleme
    sendRegistrationEmail({ name, email })
      .then(() => {
        console.log("✅ Mail gönderildi:", email);
      })
      .catch((err) => {
        console.error("❌ Mail gönderilemedi:", err);
      });

    // ✅ Kullanıcıya cevabı hemen dön
    return res.status(201).json({
      message:
        "Ön kayıt başarıyla oluşturuldu. E-posta kısa süre içinde gönderilecek.",
      data: {
        name: newRegister.name,
        talent: newRegister.talent,
      },
    });
  } catch (error: any) {
    console.error("PreRegister error:", error);

    if (error.code === "P2002") {
      return res
        .status(409)
        .json({ error: "Bu email ile daha önce kayıt yapılmış." });
    }

    return res.status(500).json({ error: "Bir hata oluştu." });
  }
};
