import React from "react";
import Card from "./Card";

interface EventData {
  name: string;
  url: string;
  description: string;
  category: string[];
  badgeText?: string;
  slug: string;
  musicType?: string;
}

interface SceneCardsProps {
  data: EventData[];
  type: "artist" | "venue";
}

const SceneCards: React.FC<SceneCardsProps> = ({ data, type }) => {
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <Card key={index} item={item} index={index} type={type} />
        ))}
      </div>
    </div>
  );
};

export default SceneCards;
