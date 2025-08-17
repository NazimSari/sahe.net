import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function DetailsTabArtist({ sanatciDetayData }: any) {
  const [selectedTab, setSelectedTab] = useState("genel-bakis");

  return (
    <div className="w-full lg:w-2/3 p-3">
      {/* Küçük ekranlar için Select */}
      <div className="block lg:hidden">
        <Select
          value={selectedTab}
          onValueChange={setSelectedTab}
          defaultValue="genel-bakis"
        >
          <SelectTrigger className="w-full text-[#f5f5f5] bg-[#160317]">
            <SelectValue placeholder="Genel Bakış" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="genel-bakis">Genel Bakış</SelectItem>
            <SelectItem value="etkinlikler">
              Katılabileceği Etkinlikler
            </SelectItem>
            <SelectItem value="repertuvar">Repertuvar</SelectItem>
            <SelectItem value="tur">Akım/Tür</SelectItem>
            <SelectItem value="kategoriler">Kategoriler</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
          <TabsTrigger value="kategoriler" className="text-sm md:text-lg">
            Kategoriler
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
              <p className="text-[#f5f5f5] flex items-center gap-14">
                <span className="font-semibold text-lg w-46">
                  Kullanılan Enstrümanlar:{" "}
                </span>
                {sanatciDetayData.enstrumans}
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
            <div className="p-0">
              <p className="text-[#f5f5f5]">{sanatciDetayData.events}</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="repertuvar">
          <div className="flex flex-col gap-5">
            <div className="p-0">
              <p className="text-[#f5f5f5]">{sanatciDetayData.repertuvar}</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tur">
          <div className="flex flex-col gap-5">
            <div className="p-0">
              <p className="text-[#f5f5f5]">{sanatciDetayData.tur}</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="kategoriler">
          <div className="flex flex-col gap-5">
            <div className="p-0">
              <p className="text-[#f5f5f5]">{sanatciDetayData.category}</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Küçük ekranlar için Select ile içerik gösterimi */}
      <div className="lg:hidden">
        {selectedTab === "genel-bakis" && (
          <div className="mt-4">
            <div className="p-2">
              <p className="text-[#f5f5f5] text-sm sm:text-base leading-relaxed">
                {sanatciDetayData.description}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-30">
                  Konuşulan Diller:{" "}
                </span>
                {sanatciDetayData.language}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-30">
                  Kuruluş Tarihi:{" "}
                </span>
                {sanatciDetayData.createdAt}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-30">
                  Kullanılan Enstrümanlar:{" "}
                </span>
                {sanatciDetayData.enstrumans}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-30">
                  Üyelik Tarihi:{" "}
                </span>
                {sanatciDetayData.memberDate}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-30">
                  Adres:{" "}
                </span>
                {sanatciDetayData.address}
              </p>
            </div>
          </div>
        )}
        {selectedTab === "etkinlikler" && (
          <Card className="p-6 mt-4">
            <CardContent className="p-0">
              <p className="text-gray-600">{sanatciDetayData.events}</p>
            </CardContent>
          </Card>
        )}
        {selectedTab === "repertuvar" && (
          <Card className="p-6 mt-4">
            <CardContent className="p-0">
              <p className="text-gray-600">{sanatciDetayData.repertuvar}</p>
            </CardContent>
          </Card>
        )}
        {selectedTab === "tur" && (
          <Card className="p-6 mt-4">
            <CardContent className="p-0">
              <p className="text-gray-600">{sanatciDetayData.tur}</p>
            </CardContent>
          </Card>
        )}
        {selectedTab === "kategoriler" && (
          <Card className="p-6 mt-4">
            <CardContent className="p-0">
              <p className="text-gray-600">{sanatciDetayData.category}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
