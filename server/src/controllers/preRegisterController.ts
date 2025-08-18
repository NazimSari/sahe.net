import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const createPreRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, talent } = req.body;

    // Basit validation
    if (!name || !email || !talent) {
      return res.status(400).json({ error: "Tüm alanlar zorunludur." });
    }

    // Kayıt oluştur
    const newRegister = await prisma.preRegister.create({
      data: { name, email, talent },
    });

    return res.status(201).json(newRegister);
  } catch (error: any) {
    console.error("PreRegister error:", error);

    // Unique constraint hatası (email daha önce kayıtlı)
    if (error.code === "P2002") {
      return res
        .status(409)
        .json({ error: "Bu email ile daha önce kayıt yapılmış." });
    }

    return res.status(500).json({ error: "Bir hata oluştu." });
  }
};
