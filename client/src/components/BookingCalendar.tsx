"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import DemoModal from "./Modals/DemoModal";

type BookingCalendarProps = {
  unavailableDates: string[];
  onSelectDate: (date: Date) => void;
};

export function BookingCalendar({
  unavailableDates,
  onSelectDate,
}: BookingCalendarProps) {
  const disabledDays = unavailableDates.map((d) => new Date(d));

  const [selected, setSelected] = React.useState<Date>();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const handleShowResults = () => {
    setIsModalOpen(true); // Butona tıklanınca modal açılır
  };

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="single"
        selected={selected}
        onSelect={(date) => {
          setSelected(date!);
          if (date) onSelectDate(date);
        }}
        disabled={disabledDays}
        className="rounded-md border shadow w-full"
      />
      <Button
        onClick={handleShowResults}
        disabled={!selected}
        className="cursor-pointer"
      >
        Rezervasyonu Onayla
      </Button>
      <DemoModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title="Demo Uyarısı"
        closeButtonText="Tamam"
      />
    </div>
  );
}
