import GithubButton from "@/app/components/GithubButton";
import GoogleButton from "@/app/components/GoogleButton";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/");

  return (
    <div className="flex flex-col">
      <p className="text-gray-300 text-xl font-normal text-center">
        to continue to Threads
      </p>
      <GithubButton />
      <GoogleButton />
    </div>
  );
};

export default LoginPage;
