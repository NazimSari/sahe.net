"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLoaderStore } from "@/store/useLoaderStore";
import { MouseEvent, forwardRef, useEffect } from "react";

type LoaderLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: MouseEvent) => void;
};

export const LoaderLink = forwardRef<HTMLAnchorElement, LoaderLinkProps>(
  ({ href, children, className, onClick }, ref) => {
    const router = useRouter();
    const pathname = usePathname();
    const showLoader = useLoaderStore((state) => state.showLoader);
    const hideLoader = useLoaderStore((state) => state.hideLoader);

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      if (onClick) onClick(e);

      if (pathname === href) {
        // Zaten aynı sayfadaysak loader göstermeye gerek yok, isteğe bağlı scroll yapabiliriz
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      showLoader();
      router.push(href);
    };

    // route değiştiğinde loader kapat
    useEffect(() => {
      hideLoader();
    }, [pathname, hideLoader]);

    return (
      <Link href={href} onClick={handleClick} className={className} ref={ref}>
        {children}
      </Link>
    );
  }
);

LoaderLink.displayName = "LoaderLink";
