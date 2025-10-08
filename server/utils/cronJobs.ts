import cron from "node-cron";
import { incrementCounter } from "../src/controllers/counterController";

// Günlük hedef ortalama
const DAILY_TARGET = 11; // 450 / 7 ≈ 64.28

// Günlük artışı takip etmek için değişken
let dailyProgress = 0;

// Rastgele artış (1-3)
const getRandomIncrement = (): number => Math.floor(Math.random() * 3) + 1;

// Rastgele zaman aralığı (10-30 dk arası)
const getRandomInterval = (): number => {
  const min = 60 * 60 * 1000; // 60 dakika
  const max = 120 * 60 * 1000; // 120 dakika
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Sayaç artırma döngüsü
const startRandomIncrement = async (): Promise<void> => {
  if (dailyProgress >= DAILY_TARGET) {
    console.log("Günlük hedefe ulaşıldı.");
    return;
  }

  const increment = getRandomIncrement();
  await incrementCounter(increment);
  dailyProgress += increment;

  const nextRun = getRandomInterval();
  console.log(
    `Bir sonraki artırma ${Math.round(nextRun / 60000)} dakika sonra olacak.`
  );

  setTimeout(startRandomIncrement, nextRun);
};

// Her gece 00:00'da günlük sayaç sıfırlama ve yeni döngü başlatma
cron.schedule("0 0 * * *", () => {
  dailyProgress = 0;
  startRandomIncrement();
});

// Uygulama açıldığında cron'u başlat
export const initCronJobs = (): void => {
  startRandomIncrement();
};
