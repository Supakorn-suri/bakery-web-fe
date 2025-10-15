import { z } from "zod";

export const memberSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export type MemberFormData = z.infer<typeof memberSchema>;

export const bakerSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone_number: z.string().optional(),
  bakery_name: z.string().optional(),
});

export type BakerFormData = z.infer<typeof bakerSchema>;
