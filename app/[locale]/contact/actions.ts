"use server";
import { getTranslations } from "next-intl/server";

import { Resend } from "resend";
import { ContactFormSchema, ContactFormData } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  const t = await getTranslations("ContactPage.form.validation");
  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: t("invalidForm") };
  }

  const { name, email, message } = result.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "delivered@resend.dev",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message || "No message provided"}`,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      error: t("unexpected"),
    };
  }
}
