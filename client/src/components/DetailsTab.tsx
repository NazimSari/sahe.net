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

export default function DetailsTab({ sanatciDetayData }: any) {
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
        <TabsList className="grid w-full grid-cols-5 gap-2 h-12 mb-4">
          <TabsTrigger value="genel-bakis" className="text-sm">
            Genel Bakış
          </TabsTrigger>
          <TabsTrigger value="etkinlikler" className="text-sm">
            Katılabileceği Etkinlikler
          </TabsTrigger>
          <TabsTrigger value="repertuvar" className="text-sm">
            Repertuvar
          </TabsTrigger>
          <TabsTrigger value="tur" className="text-sm">
            Akım/Tür
          </TabsTrigger>
          <TabsTrigger value="kategoriler" className="text-sm">
            Kategoriler
          </TabsTrigger>
        </TabsList>

        <TabsContent value="genel-bakis">
          <Card className="p-14">
            <CardContent className="p-0">
              <p className="text-gray-600">{sanatciDetayData.description}</p>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <span className="text-[#040519] font-semibold">
                  Konuşulan Diller:{" "}
                </span>
                {sanatciDetayData.language}
              </p>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <span className="text-[#040519] font-semibold">
                  Kuruluş Tarihi:{" "}
                </span>
                {sanatciDetayData.createdAt}
              </p>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <span className="text-[#040519] font-semibold">
                  Kullanılan Enstrümanlar:{" "}
                </span>
                {sanatciDetayData.enstrumans}
              </p>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <span className="text-[#040519] font-semibold">
                  Üyelik Tarihi:{" "}
                </span>
                {sanatciDetayData.memberDate}
              </p>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <span className="text-[#040519] font-semibold">Adres: </span>
                {sanatciDetayData.address}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="etkinlikler">
          <Card className="p-14">
            <CardContent className="p-0">
              <p className="text-gray-600">{sanatciDetayData.events}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="repertuvar">
          <Card className="p-14">
            <CardContent className="p-0">
              <p className="text-gray-600">{sanatciDetayData.repertuvar}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tur">
          <Card className="p-14">
            <CardContent className="p-0">
              <p className="text-gray-600">{sanatciDetayData.tur}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="kategoriler">
          <Card className="p-14">
            <CardContent className="p-0">
              <p className="text-gray-600">{sanatciDetayData.category}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Küçük ekranlar için Select ile içerik gösterimi */}
      <div className="lg:hidden">
        {selectedTab === "genel-bakis" && (
          <Card className="p-6 mt-4">
            <CardContent className="p-0">
              <p className="text-gray-600">{sanatciDetayData.description}</p>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <span className="text-[#040519] font-semibold">
                  Konuşulan Diller:{" "}
                </span>
                {sanatciDetayData.language}
              </p>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <span className="text-[#040519] font-semibold">
                  Kuruluş Tarihi:{" "}
                </span>
                {sanatciDetayData.createdAt}
              </p>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <span className="text-[#040519] font-semibold">
                  Kullanılan Enstrümanlar:{" "}
                </span>
                {sanatciDetayData.enstrumans}
              </p>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <span className="text-[#040519] font-semibold">
                  Üyelik Tarihi:{" "}
                </span>
                {sanatciDetayData.memberDate}
              </p>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <span className="text-[#040519] font-semibold">Adres: </span>
                {sanatciDetayData.address}
              </p>
            </CardContent>
          </Card>
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
