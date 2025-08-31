import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function DetailsTabArtist({ sanatciDetayData }: any) {
  const [selectedTab, setSelectedTab] = useState("genel-bakis");

  return (
    <div className="w-full lg:w-2/3 p-3">
      {/* Orta ve büyük ekranlar için Tabs */}
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="py-4 hidden lg:block"
      >
        <TabsList className="grid w-full grid-cols-5 gap-2 h-12 mb-4 bg-transparent">
          <TabsTrigger value="genel-bakis" className="md:text-lg text-sm">
            Genel Bakış
          </TabsTrigger>
          <TabsTrigger value="etkinlikler" className="text-sm md:text-lg">
            Etkinlikler
          </TabsTrigger>
          <TabsTrigger value="repertuvar" className="text-sm md:text-lg">
            Repertuvar
          </TabsTrigger>
          <TabsTrigger value="tur" className="text-sm md:text-lg">
            Akım/Tür
          </TabsTrigger>
          <TabsTrigger value="enstrumanlar" className="text-sm md:text-lg">
            Enstrumanlar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="genel-bakis">
          <div className="flex flex-col gap-5">
            <div className="p-0">
              <p className="text-[#f5f5f5]">{sanatciDetayData.description}</p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold text-lg w-46">
                  Konuşulan Diller:{" "}
                </span>
                {sanatciDetayData.language}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold text-lg w-46">
                  Kuruluş Tarihi:{" "}
                </span>
                {sanatciDetayData.createdAt}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold text-lg w-46">
                  Üyelik Tarihi:{" "}
                </span>
                {sanatciDetayData.memberDate}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold text-lg w-46">Adres: </span>
                {sanatciDetayData.address}
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="etkinlikler">
          <div className="flex flex-col gap-5">
            <ul className="list-disc list-inside text-[#f5f5f5] space-y-2">
              {sanatciDetayData.events.map((event: string, index: number) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="repertuvar">
          <div className="flex flex-col gap-5">
            <ul className="list-disc list-inside text-[#f5f5f5] space-y-2">
              {sanatciDetayData.repertuvar.map(
                (sarki: string, index: number) => (
                  <li key={index}>{sarki}</li>
                )
              )}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="tur">
          <div className="flex flex-col gap-5">
            <ul className="list-disc list-inside text-[#f5f5f5] space-y-2">
              {sanatciDetayData.musicType.map((type: string, index: number) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="enstrumanlar">
          <div className="flex flex-col gap-5">
            <ul className="list-disc list-inside text-[#f5f5f5] space-y-2">
              {sanatciDetayData.enstrumans.map(
                (enstruman: string, index: number) => (
                  <li key={index}>{enstruman}</li>
                )
              )}
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      {/* Küçük ekranlar için accordion içerik gösterimi */}
      <div className="lg:hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Genel Bakış
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-[#f5f5f5]">{sanatciDetayData.description}</p>
              <p className="text-[#f5f5f5] flex items-center gap-2">
                <span className="font-semibold">Konuşulan Diller: </span>
                {sanatciDetayData.language}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2">
                <span className="font-semibold">Kuruluş Tarihi: </span>
                {sanatciDetayData.createdAt}
              </p>

              <p className="text-[#f5f5f5] flex items-center gap-2">
                <span className="font-semibold">Üyelik Tarihi: </span>
                {sanatciDetayData.memberDate}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2">
                <span className="font-semibold">Adres: </span>
                {sanatciDetayData.address}
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Etkinlikler
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul className="list-disc list-inside text-[#f5f5f5] space-y-2">
                {sanatciDetayData.events.map((event: string, index: number) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Repertuvar
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul className="list-disc list-inside text-[#f5f5f5] space-y-2">
                {sanatciDetayData.repertuvar.map(
                  (sarki: string, index: number) => (
                    <li key={index}>{sarki}</li>
                  )
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Müzik Türü
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul className="list-disc list-inside text-[#f5f5f5] space-y-2">
                {sanatciDetayData.musicType.map(
                  (type: string, index: number) => (
                    <li key={index}>{type}</li>
                  )
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Enstrumanlar
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul className="list-disc list-inside text-[#f5f5f5] space-y-2">
                {sanatciDetayData.enstrumans.map(
                  (enstruman: string, index: number) => (
                    <li key={index}>{enstruman}</li>
                  )
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
