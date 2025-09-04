import { commentsData } from "@/lib/data";
import CommentCard from "./Cards/CommentCard";

export default function CommentsSection() {
  return (
    <div className="p-4 rounded-xl">
      {commentsData.map((c, i) => (
        <div key={i}>
          <CommentCard name={c.name} date={c.date} comment={c.comment} />
        </div>
      ))}
    </div>
  );
}
