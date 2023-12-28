import ThreadsCard from "@/app/components/ThreadsCard";
import Image from "next/image";
import { redirect } from "next/navigation";
import prisma from "../../../utils/db";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import FollowButton from "@/app/components/FollowButton";

async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      image: true,
      Followers: {
        select: {
          id: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
      Following: {
        select: {
          id: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
      Threads: {
        select: {
          id: true,
          description: true,
          createdAt: true,
          Comments: {
            select: {
              id: true,
              comment: true,
              userId: true,
              threadId: true,
              createdAt: true,
            },
          },
          Likes: {
            select: {
              id: true,
              userId: true,
              threadId: true,
              createdAt: true,
            },
          },
        },
      },
    },
  });
  return data;
}

interface IProfilePage {
  params: {
    id: string;
  };
}

const ProfilePage = async ({ params }: IProfilePage) => {
  const id = params.id;

  const session = await getServerSession(authOptions);

  const user = await getData(id);

  if (session?.user.id === user?.id) return redirect("/user/profile");

  if (!user) return redirect("/");

  return (
    <section className="max-w-4xl mt-11 flex flex-col gap-5 ml-16">
      <div className="flex gap-x-9">
        <div className="flex items-center">
          {user.image && (
            <Image
              src={user.image}
              alt="Avatar"
              width={90}
              height={90}
              className="rounded-full"
            />
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-3xl text-white font-bold">{user.name}</h2>
          <div className="flex gap-x-3">
            <p>{user?.Threads.length} Threads</p>
            <p>{user.Followers.length} Followers</p>
            <p>{user.Following.length} Following</p>
          </div>
          <FollowButton
            followerId={session?.user.id as string}
            followingId={user.id}
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-white mt-32">
        {user.name} Threads
      </h1>
      {user?.Threads.map((thread) => (
        <ThreadsCard
          key={thread.id}
          id={thread.id}
          description={thread.description}
          createdAt={thread.createdAt}
          user={user}
          comments={thread.Comments}
          likes={thread.Likes}
          hideComment={false}
        />
      ))}
    </section>
  );
};

export default ProfilePage;
