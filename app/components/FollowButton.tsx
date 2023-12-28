"use client";

import { Button } from "@/components/ui/button";
import { IFollowButton } from "../types/types";
import { followUser } from "../utils/actions";
import { usePathname } from "next/navigation";

const FollowButton = ({ followerId, followingId }: IFollowButton) => {
  const pathname = usePathname();

  const follow = async () => {
    await followUser(followerId, followingId, pathname);
  };

  return (
    <div className="flex flex-col mt-3">
      <Button
        onClick={() => follow()}
        variant="destructive"
        className="bg-blue-600 text-white hover:bg-blue-800 transition"
      >
        Follow
      </Button>
    </div>
  );
};

export default FollowButton;
