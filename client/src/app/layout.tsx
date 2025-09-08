import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { PageLoader } from "@/components/Loader/PageLoader";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "sahne.net | Oksijeni müzik olanların sahnesi",
  description: "Etkinlikleriniz için sanatçılara ulaşmanın en kolay yolu!",
  other: {
    "clarity-script": `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>
        <PageLoader />
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors />
        {/* Clarity script'i body içinde de çalışabilir, ama head'de olması için metadata kullanıldı */}
      </body>
    </html>
  );
}
