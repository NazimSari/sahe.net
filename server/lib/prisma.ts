import { PrismaClient } from "@prisma/client";

declare global {
  // Hot-reload sırasında PrismaClient'i globalde sakla
  var prisma: PrismaClient | undefined;
}

// Eğer global prisma varsa onu kullan, yoksa yeni oluştur
const prisma = global.prisma || new PrismaClient();

// Development ortamında global olarak kaydet
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
