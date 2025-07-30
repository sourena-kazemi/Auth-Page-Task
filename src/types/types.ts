import { apiSchema, userSchema } from "@/lib/schemas";
import { z } from "zod";

export type userData = z.infer<typeof userSchema>;
export type apiData = z.infer<typeof apiSchema>;

export type PhoneNumberFormState = {
  success: boolean;
  user: userData | null;
  error: string | null;
};
