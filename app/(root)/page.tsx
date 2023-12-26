import { redirect } from "next/navigation";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";
import ThreadsCard from "../components/ThreadsCard";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/login");

  return (
    <section className="max-w-4xl mt-11 flex flex-col gap-10 ml-16">
      <h1 className="text-3xl font-bold text-white">Latest Threads</h1>
      <ThreadsCard />
    </section>
  );
}
