"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

interface ICreateThreadAction {
  description: string;
  userId: string;
}

interface IAddCommentAction {
  comment: string;
  threadId: string;
  userId: string;
  pathname: string;
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

export async function addComment({
  comment,
  threadId,
  userId,
  pathname,
}: IAddCommentAction) {
  "use server";

  await prisma.comment.create({
    data: {
      comment,
      threadId,
      userId,
    },
  });

  revalidatePath(pathname);
}
