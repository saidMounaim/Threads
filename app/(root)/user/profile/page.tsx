import ThreadsCard from "@/app/components/ThreadsCard";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import prisma from "../../../utils/db";

async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      image: true,
      followers: {
        select: {
          follower: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
      following: {
        select: {
          following: {
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

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/");

  const user = await getData(session?.user.id);

  return (
    <section className="max-w-4xl mt-11 flex flex-col gap-5 ml-16">
      <div className="flex gap-x-9">
        <div className="flex items-center">
          {session?.user.image && (
            <Image
              src={session?.user.image}
              alt="Avatar"
              width={90}
              height={90}
              className="rounded-full"
            />
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-3xl text-white font-bold">
            {session?.user.name}
          </h2>
          <div className="flex gap-x-3">
            <p>{user?.Threads.length} Threads</p>
            <p>{user?.followers.length} Followers</p>
            <p>{user?.following.length} Following</p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-white mt-32">My Threads</h1>
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
