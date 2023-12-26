import { redirect } from "next/navigation";
import { authOptions } from "./utils/auth";
import { getServerSession } from "next-auth";
import LogoutButton from "./components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/login");

  return (
    <div className="">
      Welcome to home page <LogoutButton />
    </div>
  );
}
