import { redirect } from "next/navigation";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";
import ThreadsCard from "../components/ThreadsCard";
import prisma from "../utils/db";

async function getData() {
  const data = await prisma.thread.findMany({
    select: {
      id: true,
      description: true,
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/login");

  const threads = await getData();

  return (
    <section className="max-w-4xl mt-11 flex flex-col gap-5 ml-16">
      <h1 className="text-3xl font-bold text-white">Latest Threads</h1>
      {threads.map((thread) => (
        <ThreadsCard
          key={thread.id}
          id={thread.id}
          description={thread.description}
          createdAt={thread.createdAt}
          user={thread.user}
        />
      ))}
    </section>
  );
}
