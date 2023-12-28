"use client";

import { Button } from "@/components/ui/button";
import { IFollowButton } from "../types/types";
import { unfollowUser } from "../utils/actions";
import { usePathname } from "next/navigation";

const UnfollowButton = ({ followerId, followingId }: IFollowButton) => {
  const pathname = usePathname();

  const unfollow = async () => {
    await unfollowUser(followerId, followingId, pathname);
  };

  return (
    <div className="flex flex-col mt-3">
      <Button
        onClick={() => unfollow()}
        variant="destructive"
        className="bg-red-600 text-white hover:bg-red-800 transition"
      >
        Unfollow
      </Button>
    </div>
  );
};

export default UnfollowButton;
