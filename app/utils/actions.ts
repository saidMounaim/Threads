"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

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
}
