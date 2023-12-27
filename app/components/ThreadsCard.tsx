"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { IThreadsCard } from "../types/types";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { deleteThread } from "../utils/actions";

const ThreadsCard = ({ id, description, user, createdAt }: IThreadsCard) => {
  const { data: session, status } = useSession();

  const removeThread = async (id: string) => {
    if (confirm("Are u sure?")) await deleteThread(id);
  };

  return (
    <div
      className="flex w-full flex-col rounded-xl bg-slate-900 p-7 relative"
      key={id}
    >
      <Link href={`/thread/${id}`} className="flex items-start gap-x-4">
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
          <p className="text-md font-normal text-white">{description}</p>
        </div>
      </Link>
      {session?.user.id && session?.user.id === user.id && (
        <div className="absolute top-4 right-5">
          <Button
            onClick={() => {
              removeThread(id);
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
