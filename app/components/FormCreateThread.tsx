"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";
import { ThreadSchema } from "../utils/validator";
import { createThread } from "../utils/actions";

const FormCreateThread = () => {
  const { data: session, status } = useSession();
  const userId = session?.user.id as string;

  const form = useForm<z.infer<typeof ThreadSchema>>({
    resolver: zodResolver(ThreadSchema),
    defaultValues: {
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ThreadSchema>) {
    const { description } = values;
    await createThread({ description, userId });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thread</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Feel free"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
};

export default FormCreateThread;
