import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ICommentCard } from "../types/types";

const CommentCard = ({ id, user, comment, createdAt }: ICommentCard) => {
  return (
    <div
      className="flex w-full flex-col rounded-xl bg-slate-800 p-7 relative"
      key={id}
    >
      <div className="flex items-start gap-x-4">
        <div className="flex items-center">
          <Avatar>
            {user?.image ? (
              <AvatarImage src={user?.image} />
            ) : (
              <AvatarImage src={"https://github.com/shadcn.png"} />
            )}
          </Avatar>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-lg text-white font-bold">{user?.name}</h2>
          <p className="text-md font-normal text-white">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
