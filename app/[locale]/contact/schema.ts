import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, {
    message: "nameMin",
  }),
  email: z.string().email({
    message: "emailInvalid",
  }),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
