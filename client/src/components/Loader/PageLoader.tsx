"use client";

import { Loader } from "@/components/Loader/Loader";
import { useLoaderStore } from "@/store/useLoaderStore";

export const PageLoader = () => {
  const loading = useLoaderStore((state) => state.loading);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#160317] z-[9999]">
      <Loader />
    </div>
  );
};
