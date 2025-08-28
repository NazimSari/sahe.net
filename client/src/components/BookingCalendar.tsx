"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

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
      <Button disabled={!selected}>Rezervasyonu Onayla</Button>
    </div>
  );
}
