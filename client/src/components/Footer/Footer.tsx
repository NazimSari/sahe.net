import React from "react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Separator } from "../ui/separator";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { LoaderLink } from "../Loader/LoaderLink";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer className="mx-auto pt-32 pb-8 w-full bg-[#040519] px-4">
      <div className="container w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-[#f5f5f5]">
          <div className="flex flex-col px-5 mb-3 sm:px-0 gap-2">
            <h4 className="font-semibold text-lg">
              {" "}
              {/* LOGO */}
              <LoaderLink
                href="/"
                className="font-black
                        text-[#FF007A]"
              >
                <span className="md:text-lg flex items-center">
                  <span className={` md:text-xl ${roboto.className}`}>
                    sahne.net
                  </span>
                </span>
              </LoaderLink>
            </h4>
            <p>Eğlence Dünyasının Yeni Aktörü</p>
          </div>

          <ul className="flex flex-col px-5 mb-5 sm:px-0 gap-2 w-2/3">
            <h4 className="font-semibold text-lg">Sayfalar</h4>
            <Separator className="my-2" />
            <li>
              <LoaderLink href="/">Ana Sayfa</LoaderLink>
            </li>
            <li>
              <LoaderLink href="/hakkimizda">Hakkımızda</LoaderLink>
            </li>
            <li>
              <LoaderLink href="/iletisim">İletişim</LoaderLink>
            </li>
          </ul>
          <ul className="flex flex-col px-5 mb-5 sm:px-0 gap-2 w-2/3">
            <h4 className="font-semibold text-lg">Kategoriler</h4>
            <Separator className="my-2" />

            <li>
              <LoaderLink href="/mekanlar">Mekanlar</LoaderLink>
            </li>
            <li>
              <LoaderLink href="/festivaller">Festivaller</LoaderLink>
            </li>
            <li>Özel Etkinlikler</li>
          </ul>
          <ul className="flex flex-col px-5 mb-5 sm:px-0 gap-2 w-2/3">
            <h4 className="font-semibold text-lg">Etkinlik Türleri</h4>
            <Separator className="my-2" />

            <li>
              <LoaderLink href="/etkinlik-turleri/dugun">Düğün</LoaderLink>
            </li>
            <li>
              <LoaderLink href="/etkinlik-turleri/ozel-cekim">
                Özel Çekim
              </LoaderLink>
            </li>
            <li>
              <LoaderLink href="/etkinlik-turleri/baby-shower">
                Baby Shower
              </LoaderLink>
            </li>
            <li>
              <LoaderLink href="/etkinlik-turleri/happy-hour">
                Happy Hour
              </LoaderLink>
            </li>
            <li>
              <LoaderLink href="/etkinlik-turleri/dj-performans">
                DJ Performans
              </LoaderLink>
            </li>
            <li>
              <LoaderLink href="/etkinlik-turleri/dogum-gunu">
                Doğum Günü
              </LoaderLink>
            </li>
          </ul>
          <ul className="flex flex-col px-5 mb-5 sm:px-0 gap-2 w-2/3">
            <h4 className="font-semibold text-lg">Müzik Türleri</h4>
            <Separator className="my-2" />

            <li>
              <LoaderLink href="/muzik-turleri/elektronik-muzik">
                Elektronik Müzik
              </LoaderLink>
            </li>
            <li>
              <LoaderLink href="/muzik-turleri/rock-muzik">
                Rock Müzik
              </LoaderLink>
            </li>
            <li>
              <LoaderLink href="/muzik-turleri/jazz-muzik">
                Jazz Muzik
              </LoaderLink>
            </li>
            <li>
              <LoaderLink href="/muzik-turleri/latin-perkusyon">
                Latin Perküsyon
              </LoaderLink>
            </li>
            <li>
              <LoaderLink href="/muzik-turleri/etnik-muzik">
                Etnik Müzik
              </LoaderLink>
            </li>
            <li>
              <LoaderLink href="/muzik-turleri/dugun-orkestra">
                Düğün Orkestra
              </LoaderLink>
            </li>
          </ul>
          <ul className="flex flex-col px-5 mb-5 sm:px-0 gap-2 w-2/3">
            <h4 className="font-semibold text-lg">İletişim</h4>
            <Separator className="my-2" />

            <li className="flex items-center gap-2">
              <span>
                <Phone size={18} />
              </span>
              +90 555 555 55 55
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Mail size={18} />
              </span>
              sahnebilgi@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <span>
                <MapPin size={18} />
              </span>
              123.Sokak, Kadıköy/İstanbul
            </li>
          </ul>
        </div>
      </div>
      <Separator className="my-5 w-full" />
      <div className="container w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 order-2 md:order-1">
            <p className="text-[#f5f5f5] text-sm">
              © 2025 Sahne, Inc. All rights reserved.
            </p>
            <p className="text-[#f5f5f5] text-sm">Terms of Service</p>
            <p className="text-[#f5f5f5] text-sm">Privacy Policy</p>
          </div>
          <div className="text-[#f5f5f5] flex items-center mr-8 gap-3 order-1 md:order-2">
            <a href="https://www.instagram.com/sahnenet/" target="_blank">
              <FaSquareInstagram size={24} className="cursor-pointer" />
            </a>
            <FaFacebookSquare size={24} />
            <FaSquareXTwitter size={24} />
            <FaLinkedin size={24} />
            <AiFillTikTok size={24} />
            <IoLogoYoutube size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
