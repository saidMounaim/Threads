import { redirect } from "next/navigation";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/login");

  return <></>;
}
