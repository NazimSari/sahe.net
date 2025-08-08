"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "./ui/separator";

const Countdown: React.FC = () => {
  // Toplam süreyi saniye cinsinden hesapla: (37 gün * 86400) + (4 saat * 3600) + (45 dakika * 60)
  const totalSeconds = 37 * 24 * 60 * 60 + 4 * 60 * 60 + 45 * 60;

  const [secondsLeft, setSecondsLeft] = useState<number>(totalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(secondsLeft);

  return (
    <div className="text-[#f5f5f5] flex sm:gap-8 gap-4">
      <p className="flex flex-col items-center text-center justify-center">
        <span className="md:text-5xl sm:text-3xl text-xl font-bold">
          {days}{" "}
        </span>
        <span className="md:text-xl sm:text-lg text-sm font-semibold">Gün</span>
      </p>
      <div>
        <Separator orientation="vertical" className="h-10 bg-[#f5f5f5] w-1" />
      </div>
      <p className="flex flex-col items center text-center justify-center">
        <span className="md:text-5xl sm:text-3xl text-xl font-bold">
          {hours}
        </span>
        <span className="md:text-xl sm:text-lg text-sm  font-semibold">
          Saat
        </span>
      </p>
      <div>
        <Separator orientation="vertical" className="h-10 bg-[#f5f5f5] w-1" />
      </div>
      <p className="flex flex-col items center text-center justify-center">
        <span className="md:text-5xl sm:text-3xl text-xl font-bold">
          {minutes}
        </span>
        <span className="md:text-xl sm:text-lg text-sm font-semibold">
          Dakika
        </span>{" "}
      </p>
      <div>
        <Separator orientation="vertical" className="h-10 bg-[#f5f5f5] w-1" />
      </div>
      <p className="flex flex-col items center text-center justify-center">
        <span className="md:text-5xl sm:text-3xl text-xl font-bold">
          {secs}
        </span>
        <span className="md:text-xl sm:text-lg text-sm font-semibold">
          Saniye
        </span>{" "}
      </p>
    </div>
  );
};

export default Countdown;
