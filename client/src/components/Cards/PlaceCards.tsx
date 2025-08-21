import Link from "next/link";
import Card from "./Card";

interface PlaceCardProps {
  data: {
    url: string;
    name: string;
    badgeText?: string;
    category: string;
    description: string;
  }[];
}

const PlaceCard = ({ data }: PlaceCardProps) => {
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>
      <div className="text-center mt-5">
        <Link href="/etkinlik-turleri" className="text-[#f5f5f5]">
          Daha Fazla Gör
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
