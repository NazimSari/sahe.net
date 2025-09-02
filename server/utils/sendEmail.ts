import nodemailer from "nodemailer";

interface User {
  email: string;
  name?: string | null;
}
interface ContactData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendRegistrationEmail(user: User): Promise<void> {
  const displayName = user.name || "Kullanıcı";
  const mailOptions = {
    from: `"Sahne.net" <${process.env.SMTP_FROM_EMAIL}>`,
    to: user.email,
    subject: `Ön Kayıt Başarılı`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #160317; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #FF007A; text-align: center; font-size: 18px;">Sahne.net</h2>
        <p style="font-size: 16px; color: #f5f5f5; text-align: center; font-weight: 600;">
          Sayın ${displayName},<br>Ön kaydınız başarıyla gerçekleşti, aramıza hoş geldiniz!
        </p>
        <p style="font-size: 14px; color: #f5f5f5; text-align: center;">
          Gelişmeler için bu e-posta hesabından bilgilendirileceksiniz.
        </p>
        <p style="font-size: 12px; color: #777777; text-align: center; margin-top: 10px;">
          Bu otomatik bir e-postadır, lütfen yanıtlamayınız.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Kayıt maili gönderildi: ${user.email}`);
  } catch (error) {
    console.error("Kayıt maili gönderimi hatası:", error);
    throw new Error("Kayıt maili gönderilemedi.");
  }
}
async function sendContactEmail({
  name,
  email,
  message,
}: ContactData): Promise<void> {
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_FROM_EMAIL,
    subject: `İletişim Formu: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>İletişim Formu Mesajı</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`İletişim maili gönderildi: ${email}`);
  } catch (error) {
    console.error("İletişim maili gönderimi hatası:", error);
    throw new Error("İletişim maili gönderilemedi.");
  }
}

export { sendRegistrationEmail, sendContactEmail };
