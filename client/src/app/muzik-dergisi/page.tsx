import React from "react";

export default function MusicMagazinePage() {
  return (
    <main className="min-h-screen w-full bg-[#160317]">
      <section className="container mx-auto">
        <div className="flex items-center justify-center h-screen px-4">
          <h1 className=" text-3xl md:text-6xl max-w-5xl font-bold text-center text-[#f5f5f5] md:leading-tight">
            Oksijeni müzik olanların dergisi{" "}
            <a
              href="http://muzikdergisi.com"
              className="text-[#FF007A] underline"
              target="_blank"
            >
              muzikdergisi.com
            </a>{" "}
            çok yakında yayın hayatına başlayacak!
          </h1>
        </div>
      </section>
    </main>
  );
}
