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
      <div style="font-family: Arial, sans-serif; padding: 20px; margin: 0;">
      <div style="max-width: 600px; margin: 0 auto;">
        <div style="background-color: #160317; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
       <div style="background-color: #040519; padding: 20px; text-align: center;">
        <h1 style="color: #FF007A; font-size: 24px; margin: 0;">Sahne.net</h1>
      </div>

      <div style="padding: 20px; text-align: left;">
        <p style="color: #f5f5f5; font-size: 16px; font-weight: 600; margin-bottom: 10px;">
          Merhaba Sayın ${displayName},
        </p>
        <p style="color: #f5f5f5; font-size: 15px; line-height: 1.5;">
          Ön kaydınız başarıyla tamamlandı. Aramıza hoş geldiniz! 🎉
        </p>
        <p style="color: #f5f5f5; font-size: 15px; line-height: 1.5; margin-top: 10px;">
          Bundan sonraki gelişmeleri ve duyuruları bu e-posta adresi üzerinden sizinle paylaşacağız: <strong>${user.email}</strong>
        </p>
        <p style="color: #f5f5f5; font-size: 15px; line-height: 1.5; margin-top: 10px;">
          Ayrıca değerli bağlantılarınızı da Sahne.net’e davet ederek kaliteli müzik anlayışını birlikte büyütebiliriz.
        </p>
        <p style="color: #f5f5f5; font-size: 15px; line-height: 1.5; margin-top: 15px;">
          Sizi aramızda görmekten mutluluk duyuyoruz!
        </p>
        <p style="color: #FF007A; font-size: 14px; margin-top: 25px;">
          Sevgilerimizle,<br>
          <strong>Sahne.net Ekibi</strong>
        </p>
      </div>

      <!-- Footer -->
      <div style="text-align: center; padding: 15px; border-top: 1px solid #eee;">
        <p style="color: #777777; font-size: 12px;">
          Bu otomatik bir e-postadır, lütfen yanıtlamayınız.
        </p>
      </div>
    </div>
  </div>
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
      to: "sahnebilgi@gmail.com",
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
