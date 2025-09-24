import prisma from "../../lib/prisma";

// Sayaç değerini getir (Frontend buradan çekecek)
export const getCounter = async (req: any, res: any) => {
  try {
    const counter = await prisma.counter.findUnique({ where: { id: 1 } });

    // Eğer kayıt yoksa otomatik oluştur
    if (!counter) {
      const newCounter = await prisma.counter.create({
        data: {
          id: 1,
          value: 0,
        },
      });
      return res.json(newCounter);
    }

    res.json(counter);
  } catch (error) {
    console.error("Sayaç verisi alınamadı:", error);
    res.status(500).json({ error: "Sayaç alınamadı" });
  }
};

// Sayaç artırma (Sadece backend cron tarafından kullanılacak, public değil)
export const incrementCounter = async (amount: number = 1) => {
  try {
    const counter = await prisma.counter.update({
      where: { id: 1 },
      data: {
        value: {
          increment: amount,
        },
      },
    });

    console.log(`Sayaç ${amount} artırıldı. Yeni değer: ${counter.value}`);
    return counter;
  } catch (error) {
    console.error("Sayaç artırılamadı:", error);
  }
};
