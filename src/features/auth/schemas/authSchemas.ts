import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const memberRegisterSchema = z
  .object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(10, "Password must be less than 10 characters"),
    confirm_password: z.string().min(1, "Please confirm your password"),
    role: z.enum(["member", "baker"] as const),
  })
  .refine(
    (data: { password: string; confirm_password: string }) =>
      data.password === data.confirm_password,
    {
      message: "Passwords don't match",
      path: ["confirm_password"], // show error on confirm_password field
    }
  );

export type MemberRegisterFormData = z.infer<typeof memberRegisterSchema>;

export const step1Schema = z
  .object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(10, "Password must be less than 10 characters"),
    confirm_password: z.string().min(1, "Please confirm your password"),
  })
  .refine(
    (data: { password: string; confirm_password: string }) =>
      data.password === data.confirm_password,
    {
      message: "Passwords don't match",
      path: ["confirm_password"],
    }
  );

export const step2Schema = z.object({
  bakery_name: z.string().min(1, "Bakery name is required"),
  phone_number: z.string().min(1, "Phone number is required"),
  bakery_address: z.string().optional(),
});

export const step3Schema = z.object({
  bank_name: z.string().optional(),
  account_number: z.string().optional(),
  role: z.enum(["member", "baker"] as const),
});

export const registerSchema = step1Schema.merge(step2Schema).merge(step3Schema);

export type RegisterFormData = z.infer<typeof registerSchema>;
