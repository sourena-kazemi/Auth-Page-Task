"use server";
import { z } from "zod";
import { apiSchema, phoneNumberSchema } from "./schemas";
import { apiData, PhoneNumberFormState } from "@/types/types";
export async function validateForm(
  prevState: PhoneNumberFormState,
  formData: FormData
): Promise<PhoneNumberFormState> {
  // server side validation of phone number
  const phoneNumber = formData.get("phone-number");
  const parsed = phoneNumberSchema.safeParse(phoneNumber);
  if (!parsed.success) {
    return { success: false, user: null, error: z.prettifyError(parsed.error) };
  }
  //retrieving user data from our API
  const response = await fetch("https://randomuser.me/api/?results=1&nat=us");
  if (!response.ok) {
    return {
      success: false,
      user: null,
      error: "Failed to fetch user data from the API",
    };
  }
  let apiData: apiData;
  try {
    const data = await response.json();
    apiData = apiSchema.parse(data);
  } catch (err) {
    return {
      success: false,
      user: null,
      error: "Something went wrong while loading data.",
    };
  }

  return { success: true, user: apiData.results[0], error: null };
}
