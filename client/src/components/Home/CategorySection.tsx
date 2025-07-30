import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

const categories = [
  { id: 1, name: "Düğün", img: "/dugun.jpg" },
  { id: 2, name: "Özel Çekim", img: "/ozel-cekim.jpg" },
  { id: 3, name: "Baby Shower", img: "/baby-shower.jpg" },
  { id: 4, name: "Happy Hour", img: "/happy-hour.jpg" },
  { id: 5, name: "Dj Performansı", img: "/dj.jpg" },
  { id: 6, name: "Doğum Günü", img: "/dogum-gunu.jpg" },
];

export default function CategorySection() {
  return (
    <section className="mx-auto container py-8">
      <div className="flex gap-6 justify-center">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col w-60  text-[#f5f5f5]">
            <div className="w-60 h-60">
              <Image
                src={category.img}
                alt={category.name}
                width={240}
                height={240}
                className="object-cover rounded-md w-full h-full"
              />
            </div>
            <p className="text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
