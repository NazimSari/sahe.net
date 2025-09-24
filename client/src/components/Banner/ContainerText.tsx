"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "./ContainerTextFlip ";

export function ContainerTextFlipDemo() {
  const words = ["duyur!", "sergile!", "paylaş!"];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative max-w-4xl text-center mb-6 w-full mx-auto md:text-6xl sm:text-4xl text-3xl leading-normal font-bold tracking-tight text-[#f5f5f5]  dark:text-zinc-100"
      )}
      layout
    >
      <div className="flex flex-col md:flex-row items-center text-center justify-center p-2 md:gap-5 gap-3 w-full">
        <p className="text-center">Sanatını dünyaya</p>
        <div className="md:w-[224px] w-[146px]">
          <ContainerTextFlip words={["duyur", "sergile", "paylaş"]} />
        </div>
      </div>
    </motion.div>
  );
}
