"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

interface ICreateThreadAction {
  description: string;
  userId: string;
}

export async function createThread({
  description,
  userId,
}: ICreateThreadAction) {
  "use server";

  const thread = await prisma.thread.create({
    data: { description, userId },
  });

  revalidatePath("/");
  redirect("/");
}

export async function deleteThread(threadId: string) {
  "use server";

  const thread = await prisma.thread.delete({ where: { id: threadId } });

  revalidatePath("/");
  redirect("/");
}
