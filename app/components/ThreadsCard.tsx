"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { IThreadsCard } from "../types/types";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import {
  addLikeThread,
  deleteThread,
  findLikeThread,
  removeLikeThread,
} from "../utils/actions";
import { Heart } from "lucide-react";
import { usePathname } from "next/navigation";

const ThreadsCard = ({
  id,
  description,
  user,
  comments,
  createdAt,
  likes,
  hideComment,
}: IThreadsCard) => {
  const { data: session, status } = useSession();

  const pathname = usePathname();

  const removeThread = async () => {
    if (confirm("Are u sure?")) await deleteThread(id);
  };

  const likeThread = async () => {
    await addLikeThread(user?.id as string, id, pathname);
  };

  const unlikeThread = async () => {
    const findLikeId = await findLikeThread(user.id as string, id);
    await removeLikeThread(findLikeId?.id as string, pathname);
  };

  function doesLikeExist(userId: string, threadId: string) {
    return likes.some(
      (like) => like.userId === userId && like.threadId === threadId
    );
  }

  const checkLike = doesLikeExist(user.id as string, id);

  return (
    <div
      className="flex w-full flex-col rounded-xl bg-slate-900 p-7 relative"
      key={id}
    >
      <Link href={`/thread/${id}`} className="flex items-start gap-x-4">
        <Link href={`/user/${user?.id}`} className="flex items-center">
          <Avatar>
            {user?.image ? (
              <AvatarImage src={user?.image} />
            ) : (
              <AvatarImage src={"https://github.com/shadcn.png"} />
            )}
          </Avatar>
        </Link>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-lg text-white font-bold">{user?.name}</h2>
          <p className="text-md font-normal text-white">{description}</p>
        </div>
      </Link>
      <div className="flex gap-x-4 items-center mt-3">
        {checkLike ? (
          <Button
            onClick={() => unlikeThread()}
            variant="outline"
            className="bg-slate-900"
          >
            <Heart className="w-5 h-5 text-red-600" />
          </Button>
        ) : (
          <Button
            onClick={() => likeThread()}
            variant="outline"
            className="bg-slate-900"
          >
            <Heart className="w-5 h-5" />
          </Button>
        )}
        <p>{likes.length} Likes</p>
        {!hideComment && (
          <div className="flex flex-col">
            <p>{comments.length} Comments</p>
          </div>
        )}
      </div>
      {session?.user.id && session?.user.id === user.id && (
        <div className="absolute top-4 right-5">
          <Button
            onClick={() => {
              removeThread();
            }}
            variant="destructive"
            className="bg-red-600 text-white"
          >
            Delete Thread
          </Button>
        </div>
      )}
    </div>
  );
};

export default ThreadsCard;
