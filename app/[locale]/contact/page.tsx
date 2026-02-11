"use client";

import Title from "@/components/molecules/title";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { useTranslations } from "next-intl";

import { ContactFormSchema, ContactFormData } from "./schema";
import { sendContactEmail } from "./actions";

export default function Page() {
  const t = useTranslations("ContactPage");
  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const result = await sendContactEmail(data);

      if (result.success) {
        toast({
          title: t("toasts.success"),
          description: t("toasts.successDesc"),
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: t("toasts.error"),
          description: result.error || t("toasts.errorDesc"),
        });
      }
    } catch {
      toast({
        variant: "destructive",
        title: t("toasts.unexpected"),
        description: t("toasts.unexpectedDesc"),
      });
    }
  }
  return (
    <div className="space-y-8 p-4">
      <Title title={t("title")}>
        <AvailableBadge />
      </Title>
      <div className="">
        <h3 className="text-3xl font-semibold">{t("inquiry")}</h3>
        <p className="text-muted-foreground">
          {t("inquiryDesc")}
        </p>
      </div>
      <Button className="w-full" asChild>
        <Link
          href="https://cal.com/ertugrulcan/meet"
          className="flex items-center"
          target="_blank"
        >
          {t("scheduleMeeting")}
          <ExternalLink className="ml-2 w-4" />
        </Link>
      </Button>
      <div className="flex items-center justify-center gap-4">
        <Separator className="w-full shrink" />
        <span className="text-nowrap">{t("or")}</span>
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
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>{t("form.name")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.namePlaceholder")}
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage>
                  {fieldState.error && t(`form.validation.${fieldState.error.message}`)}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>{t("form.email")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.emailPlaceholder")}
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage>
                  {fieldState.error && t(`form.validation.${fieldState.error.message}`)}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-2">
                <FormLabel>{t("form.message")}</FormLabel>

                <FormControl>
                  <Textarea
                    placeholder={t("form.messagePlaceholder")}
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage>
                  {fieldState.error && t(`form.validation.${fieldState.error.message}`)}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button className="col-span-2" type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? t("form.sending") : t("form.submit")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
