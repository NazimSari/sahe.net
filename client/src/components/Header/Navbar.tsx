"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

const categories: {
  title: string;
  href: string;
  description: string;
  img: string;
}[] = [
  {
    title: "Sahnenin Yıldızları",
    href: "/category/teknoloji",
    description: "Son teknoloji haberleri ve ürün incelemeleri.",
    img: "/rock-music.jpg",
  },
  {
    title: "Mekanlar",
    href: "/category/tasarim",
    description: "UI/UX, grafik tasarım ve yaratıcı fikirler.",
    img: "/roof.jpg",
  },
  {
    title: "Müzik Türleri",
    href: "/category/yazilim",
    description: "Kodlama, frameworkler ve yazılım geliştirme.",
    img: "/happy-hour.jpg",
  },
  {
    title: "Etkinlik Türleri",
    href: "/etkinlik-turleri",
    description: "Etkinliğin için en iyi favori grubunu keşfet!",
    img: "/page2.jpg",
  },
  {
    title: "Festivaller",
    href: "/festivaller",
    description: "Startup hikayeleri ve iş stratejileri.",
    img: "/page4.jpg",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 z-50 ${
        scrolled
          ? "fixed top-0 w-full h-20 bg-[#040519]/50 backdrop-blur-md backdrop-saturate-150 shadow-sm"
          : "absolute top-0 w-full bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="font-bold text-xl transition-colors duration-300 
            text-[#FF007A]"
        >
          SAHNE
        </Link>

        {/* MENÜ ORTADA */}
        <div className="hidden md:flex flex-1  justify-center text-[#f5f5f5]">
          <NavigationMenu>
            <NavigationMenuList>
              {/* HOME */}
              <NavItem href="/" scrolled={scrolled}>
                Home
              </NavItem>

              {/* HAKKIMIZDA */}
              <NavItem href="/hakkimizda" scrolled={scrolled}>
                Hakkımızda
              </NavItem>

              {/* CATEGORY DROPDOWN */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent hover:bg-[#f5f5f5] rounded-md px-3 py-2 transition-colors duration-300
                   text-white text-base"
                >
                  Category
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-2 p-4 md:w-[600px] md:grid-cols-2">
                    {categories.map((category) => (
                      <div key={category.title}>
                        <NavigationMenuLink asChild>
                          <div className="flex">
                            <Link
                              href={category.href}
                              className="flex items-center gap-3 rounded-md p-2 hover:bg-[#f5f5f5]"
                            >
                              {/* Görsel solda */}
                              <img
                                src={category.img}
                                alt={category.title}
                                className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                              />

                              {/* Metin sağda */}
                              <div className="flex flex-col text-left">
                                <div className="text-sm font-medium">
                                  {category.title}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {category.description}
                                </p>
                              </div>
                            </Link>
                          </div>
                        </NavigationMenuLink>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* İLETİŞİM */}
              <NavItem href="/iletisim" scrolled={scrolled}>
                İletişim
              </NavItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* SAĞ BUTONLAR */}
        <div className="hidden md:flex gap-2">
          {/* <Button
            variant="outline"
            className="bg-transparent hover:bg-[#f5f5f5] px-4 py-2 transition-colors duration-300 text-[#f5f5f5] border-[#f5f5f5]"
          >
            Sign In
          </Button> */}
          <Link
            href={"/#hero-section"}
            className="bg-[#f5f5f5] text-[#040519] hover:bg-[#040519] hover:text-[#f5f5f5] border font-semibold border-[#f5f5f5] rounded-lg transition-all duration-300 px-4 py-2"
          >
            Ön Kayıt
          </Link>
        </div>

        {/* MOBILE MENU */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="bg-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[280px]">
            <SheetHeader>
              <SheetTitle>Sahne</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-2 p-3">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/hakkimizda" onClick={() => setOpen(false)}>
                Hakkımızda
              </Link>

              {/* Category accordion */}
              <Accordion type="single" collapsible>
                <AccordionItem value="category">
                  <AccordionTrigger className="flex justify-between">
                    Category
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 pl-4">
                    {categories.map((category) => (
                      <Link
                        key={category.title}
                        href={category.href}
                        onClick={() => setOpen(false)}
                      >
                        {category.title}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link href="/iletisim" onClick={() => setOpen(false)}>
                İletişim
              </Link>

              {/* Mobile'de butonlar */}
              <div className="mt-4 flex flex-col gap-2">
                {/* <Button
                  variant="outline"
                  className="w-1/2 bg-transparent hover:bg-[#f5f5f5]"
                >
                  Sign In
                </Button> */}
                <Link
                  href={"/#hero-section"}
                  className="w-1/2 bg-[#040519] hover:bg-[#f5f5f5] text-white rounded-md py-1 text-center border border-[#040519] transition-all duration-300 hover:text-[#040519]"
                >
                  Ön Kayıt
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function NavItem({
  href,
  children,
  scrolled,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        asChild
        className="rounded-md px-3 py-2 transition-colors duration-300 text-base font-semibold
      text-white"
      >
        <Link href={href}>{children}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export default Navbar;
