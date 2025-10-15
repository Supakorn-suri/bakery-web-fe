import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z
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
    confirmPassword: z.string().min(1, "Please confirm your password"),
    role: z.enum(["member", "baker"] as const),
    phone_number: z.string().min(1, "Phone number is required"),
  bakery_name: z.string().min(1, "Bakery name is required"),
  })
  .refine(
    (data: { password: string; confirmPassword: string }) =>
      data.password === data.confirmPassword,
    {
      message: "Passwords don't match",
      path: ["confirmPassword"], // show error on confirmPassword field
    }
  );

export type RegisterFormData = z.infer<typeof registerSchema>;
