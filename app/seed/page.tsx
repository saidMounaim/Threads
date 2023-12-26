import { Button } from "@/components/ui/button";
import prisma from "../utils/db";

export default function SeedDatabase() {
  async function postData() {
    "use server";
    await prisma.thread.createMany({
      data: [
        {
          id: "0",
          description: "This is my first thread - happy to be here!",
          userId: "clqm85v8l0000wqdiomtg6w79",
        },
        {
          id: "1",
          description:
            "What is the Next.js you are working on? Share project ideas below!",
          userId: "clqm85v8l0000wqdiomtg6w79",
        },
        {
          id: "2",
          description: "This is a test of the vercel app!",
          userId: "clqm85v8l0000wqdiomtg6w79",
        },
      ],
    });
  }

  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
