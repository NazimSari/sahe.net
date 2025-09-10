import { Resend } from "resend";

interface User {
  email: string;
  name?: string | null;
}
interface ContactData {
  name: string;
  email: string;
  message: string;
}

// Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendRegistrationEmail(user: User): Promise<void> {
  const displayName = user.name || "Kullanıcı";

  try {
    await resend.emails.send({
      from: "Sahne.net <noreply@mail.sahne.net>",
      to: user.email,
      subject: "Ön Kayıt Başarılı",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #160317; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #FF007A; text-align: center; font-size: 18px;">Sahne.net</h2>
          <p style="font-size: 16px; color: #f5f5f5; text-align: center; font-weight: 600;">
            Sayın ${displayName},<br>Ön kaydınız başarıyla gerçekleşti. Aramıza hoş geldiniz!
          </p>
          <p style="font-size: 14px; color: #f5f5f5; text-align: center;">
            Gelişmeler için bu e-posta hesabı üzerinden bilgilendirileceksiniz. (${user.email})
          </p>
          <p style="font-size: 12px; color: #777777; text-align: center; margin-top: 10px;">
            Bu otomatik bir e-postadır, lütfen yanıtlamayınız.
          </p>
        </div>
      `,
    });

    console.log(`Kayıt maili gönderildi: ${user.email}`);
  } catch (error: any) {
    console.error("Kayıt maili gönderimi hatası:", error);
    if (error.response) console.error("Resend detay:", error.response.data);
    throw new Error("Kayıt maili gönderilemedi.");
  }
}

async function sendContactEmail({
  name,
  email,
  message,
}: ContactData): Promise<void> {
  try {
    await resend.emails.send({
      from: "Sahne.net <noreply@mail.sahne.net>",
      to: "info@sahne.net",
      replyTo: email,
      subject: `İletişim Formu: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>İletişim Formu Mesajı</h2>
          <p><strong>Ad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Mesaj:</strong> ${message}</p>
        </div>
      `,
    });

    console.log(`İletişim maili gönderildi: ${email}`);
  } catch (error: any) {
    // DÜZELTME: Daha detaylı hata loglaması eklendi
    console.error("Hata:", error.message, error.response?.data);
    throw new Error("İletişim maili gönderilemedi.");
  }
}

export { sendRegistrationEmail, sendContactEmail };
