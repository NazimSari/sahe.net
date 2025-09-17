"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

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
  SheetDescription,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { LoaderLink } from "../Loader/LoaderLink";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal"],
});

const categories: {
  title: string;
  href: string;
  description: string;
  img: string;
  external: boolean;
}[] = [
  {
    title: "Bu Gece Sahne",
    href: "/bu-gece-sahne",
    description:
      "Canlı müzik performansları, sahne deneyimleri ve geceye renk katan etkinlikler.",
    img: "/page5.webp",
    external: false,
  },
  {
    title: "Mekanlar",
    href: "/mekanlar",
    description: "Şehrin en popüler kulüpler ve etkinlik mekanlarını keşfet.",
    img: "/page10.webp",
    external: false,
  },
  {
    title: "Müzik Türleri",
    href: "/muzik-turleri",
    description:
      "Rock’tan caz’a, pop’tan elektronik müziğe kadar farklı tarzları keşfet.",
    img: "/page14.webp",
    external: false,
  },
  {
    title: "Etkinlik Türleri",
    href: "/etkinlik-turleri",
    description: "Etkinliğin için en iyi favori grubunu keşfet!",
    img: "/page2.webp",
    external: false,
  },
  {
    title: "Festivaller",
    href: "/festivaller",
    description:
      "Müziğin, eğlencenin ve kalabalıkların buluştuğu en unutulmaz festivalleri keşfet.",
    img: "/page4.webp",
    external: false,
  },
  {
    title: "Müzik TV",
    href: "https://muzik.tv/",
    description: "Her kategoriye özel müzik videolarını burada bulabilirsin.",
    img: "/musictv.webp",
    external: true,
  },
  {
    title: "Müzik Dergisi",
    href: "https://preview--bkksj1hpna57.trickle.host/",
    description:
      "Müziğe dair yazılar, haberler ve ilham verici içerikler burada seni bekliyor.",
    img: "/musicmagazine.webp",
    external: true,
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

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
          ? "fixed top-0 w-full md:h-24 h-20 bg-[#040519]/50 backdrop-blur-md backdrop-saturate-150 shadow-sm"
          : "absolute top-0 w-full bg-transparent"
      }`}
    >
      <div className="container mx-auto flex md:h-24 h-20 items-center justify-between px-4">
        {/* LOGO */}
        <LoaderLink
          href="/"
          className="font-black
            text-[#FF007A]"
        >
          <span className="inline-flex items-center text-3xl lg:text-5xl">
            <span
              className={`font-black tracking-tight ${leagueSpartan.className}`}
            >
              sahne.net
            </span>
          </span>
        </LoaderLink>

        {/* MENÜ ORTADA */}
        <div className="hidden md:flex flex-1  justify-center text-[#f5f5f5]">
          <NavigationMenu>
            <NavigationMenuList>
              {/* HOME */}
              <NavItem href="/" scrolled={scrolled}>
                Ana Sayfa
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
                  Kategoriler
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-2 p-4 md:w-[600px] md:grid-cols-2">
                    {categories.map((category) => (
                      <div key={category.title}>
                        <NavigationMenuLink asChild>
                          <div className="flex">
                            {category.external ? (
                              <a
                                href={category.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 rounded-md p-2 hover:bg-[#f5f5f5]"
                              >
                                <img
                                  src={category.img}
                                  alt={category.title}
                                  className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                                />
                                <div className="flex flex-col text-left">
                                  <div className="text-sm font-medium">
                                    {category.title}
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    {category.description}
                                  </p>
                                </div>
                              </a>
                            ) : (
                              <LoaderLink
                                href={category.href}
                                className="flex items-center gap-3 rounded-md p-2 hover:bg-[#f5f5f5]"
                              >
                                <img
                                  src={category.img}
                                  alt={category.title}
                                  className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                                />
                                <div className="flex flex-col text-left">
                                  <div className="text-sm font-medium">
                                    {category.title}
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    {category.description}
                                  </p>
                                </div>
                              </LoaderLink>
                            )}
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
          <div className="bg-transparent border border-[#FF007A] text-[#FF007A] flex items-center px-4 py-2 rounded-lg font-semibold">
            BETA
          </div>
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
            <div className="flex items-center gap-2">
              <span className="text-md font-semibold text-[#FF007A]">BETA</span>
              <Button variant="outline" size="icon" className="bg-white">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </SheetTrigger>

          <SheetContent side="left" className="w-[280px] bg-[#040519]">
            <SheetHeader>
              <SheetTitle className="text-[#FF007A] text-lg">
                <span className="text-xl flex items-center">
                  <span className="font-black">sahne.net(BETA)</span>
                </span>
              </SheetTitle>
              <SheetDescription className="sr-only">
                Menü açıklaması
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-5 p-3 text-[#f5f5f5] text-lg font-semibold">
              <LoaderLink
                href="/"
                onClick={() => setOpen(false)}
                className={`py-2 ${
                  pathname === "/"
                    ? "underline decoration-[#FF007A] decoration-2"
                    : ""
                }`}
              >
                Ana Sayfa
              </LoaderLink>
              <LoaderLink
                href="/hakkimizda"
                onClick={() => setOpen(false)}
                className={`py-2 ${
                  pathname === "/hakkimizda"
                    ? "underline decoration-[#FF007A] decoration-2"
                    : ""
                }`}
              >
                Hakkımızda
              </LoaderLink>

              {/* Category accordion */}
              <Accordion type="single" collapsible>
                <AccordionItem value="category">
                  <AccordionTrigger className="flex justify-between text-lg">
                    Kategoriler
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 pl-4 text-[#f5f5f5]">
                    {categories.map((category) =>
                      category.external ? (
                        <a
                          key={category.title}
                          href={category.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2"
                        >
                          {category.title}
                        </a>
                      ) : (
                        <LoaderLink
                          key={category.title}
                          href={category.href}
                          onClick={() => setOpen(false)}
                          className={
                            pathname === category.href
                              ? "underline decoration-[#FF007A] decoration-2"
                              : ""
                          }
                        >
                          {category.title}
                        </LoaderLink>
                      )
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <LoaderLink
                href="/iletisim"
                onClick={() => setOpen(false)}
                className={`py-2 ${
                  pathname === "/iletisim"
                    ? "underline decoration-[#FF007A] decoration-2"
                    : ""
                }`}
              >
                İletişim
              </LoaderLink>

              {/* Mobile'de butonlar */}
              <div className="mt-4 flex flex-col gap-2">
                <LoaderLink
                  href="/#hero-section"
                  onClick={() => setOpen(false)}
                  className="w-fit px-4 text-base bg-transparent border border-[#FF007A] hover:bg-[#FF007A] text-white rounded-md py-1 text-center transition-all duration-300 hover:text-[#f5f5f5]"
                >
                  Ön Kayıt
                </LoaderLink>
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
        <LoaderLink href={href}>{children}</LoaderLink>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export default Navbar;
