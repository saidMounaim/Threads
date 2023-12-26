import * as z from "zod";

export const ThreadSchema = z.object({
  description: z.string().min(10, {
    message: "Thread must be at least 10 characters.",
  }),
});
