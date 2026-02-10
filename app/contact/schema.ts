import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be valid.",
  }),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
