"use server";

import prisma from "./db";

export async function createThread(formData: FormData) {
  "use server";

  const description = formData.get("description") as string;
  const userId = formData.get("userId") as string;
  const thread = await prisma.thread.create({
    data: { id: "test", description, userId },
  });
}
