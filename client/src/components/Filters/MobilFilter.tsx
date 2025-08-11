import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";
import Filter from "../Filters/Filter";

export default function MobilFilter() {
  return (
    <div className="flex items-center gap-4">
      {/* mobil filter render */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="xl:hidden mt-2">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filtreler
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[95vw]  max-h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Filtreler</DialogTitle>
          </DialogHeader>
          <Filter />
        </DialogContent>
      </Dialog>
    </div>
  );
}
