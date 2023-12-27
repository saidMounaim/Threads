"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { IAddCommentAction, ICreateThreadAction } from "../types/types";

// Create Thread
export async function createThread({
  description,
  userId,
}: ICreateThreadAction) {
  "use server";

  await prisma.thread.create({
    data: { description, userId },
  });

  revalidatePath("/");
  redirect("/");
}

// Delete Thread
export async function deleteThread(threadId: string) {
  "use server";

  await prisma.thread.delete({ where: { id: threadId } });

  revalidatePath("/");
  redirect("/");
}

// Add Comment
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

// Delete Comment
export async function deleteComment(commentID: string, pathname: string) {
  "use server";

  await prisma.comment.delete({ where: { id: commentID } });

  revalidatePath(pathname);
}
