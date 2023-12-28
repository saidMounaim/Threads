"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ICommentCard } from "../types/types";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { deleteComment } from "../utils/actions";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CommentCard = ({ id, user, comment, createdAt }: ICommentCard) => {
  const { data: session, status } = useSession();

  const pathname = usePathname();

  const removeComment = async () => {
    if (confirm("Are u sure?")) await deleteComment(id, pathname);
  };

  return (
    <div
      className="flex w-full flex-col rounded-xl bg-slate-800 px-4 py-5 relative"
      key={id}
    >
      <div className="flex items-start gap-x-4">
        <Link href={`/user/${user.id}`} className="flex items-center">
          <Avatar>
            <AvatarImage src={user?.image as string} />
          </Avatar>
        </Link>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-lg text-white font-bold">{user?.name}</h2>
          <p className="text-md font-normal text-white">{comment}</p>
        </div>
      </div>
      {session?.user.id && session?.user.id === user.id && (
        <div className="absolute top-4 right-5">
          <Button
            onClick={() => {
              removeComment();
            }}
            variant="destructive"
            className="bg-red-600 text-white"
          >
            Delete Comment
          </Button>
        </div>
      )}
    </div>
  );
};

export default CommentCard;
