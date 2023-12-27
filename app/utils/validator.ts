import * as z from "zod";

export const ThreadSchema = z.object({
  description: z.string().min(10, {
    message: "Thread must be at least 10 characters.",
  }),
});

export const CommentSchema = z.object({
  comment: z.string().min(10, {
    message: "Comment required",
  }),
});
