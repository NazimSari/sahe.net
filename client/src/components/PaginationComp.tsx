import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationComp() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="bg-transparent text-[#f5f5f5] border borer-[#f5f5f5]"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-transparent text-[#f5f5f5] ">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-transparent text-[#f5f5f5]">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="text-[#f5f5f5]" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="bg-transparent text-[#f5f5f5] border borer-[#f5f5f5]"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
