"use client";

import Title from "@/components/molecules/title";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import AvailableBadge from "@/components/molecules/available-badge";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be valid.",
  }),
  message: z.string().optional(),
});
export default function Page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="space-y-8 p-4">
      <Title title="Hire me">
        <AvailableBadge />
      </Title>
      <div className="">
        <h3 className="text-3xl font-semibold">Inquiry</h3>
        <p className="text-muted-foreground">
          Do you need help or just want to say hi? Reach out now
        </p>
      </div>
      <Button className="w-full" asChild>
        <Link
          href="https://cal.com/ertugrulcan/meet"
          className="flex items-center"
          target="_blank"
        >
          Schedule a meeting on cal.com
          <ExternalLink className="ml-2 w-4" />
        </Link>
      </Button>
      <div className="flex items-center justify-center gap-4">
        <Separator className="w-full shrink" />
        or
        <Separator className="w-full shrink" />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="test@test.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Message</FormLabel>

                <FormControl>
                  <Textarea placeholder="I'am reaching you for..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="col-span-2" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
