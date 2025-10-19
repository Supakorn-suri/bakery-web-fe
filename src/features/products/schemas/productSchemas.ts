import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.string().min(0, "Price is required").optional(),
  cook_time: z.string().min(1, "Cook Time is required"),
  rating: z.number().min(0).max(5).optional(),
  image: z
    .any()
    .refine((file: unknown) => file instanceof File, "Image is required")
    .refine(
      (file: File | unknown) =>
        file instanceof File && file.size <= 5 * 1024 * 1024,
      "Image must be ≤ 5MB"
    ),
});

export type CreateProductFormData = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  price: z.string().min(0, "Price is required").optional(),
  cook_time: z.string().min(1, "Cook Time is required").optional(),
  rating: z.number().min(0).max(5).optional(),
  image: z
    .any()
    .optional()
    .refine(
      (file: unknown) =>
        file === undefined || file instanceof File || typeof file === "string",
      "Invalid image format"
    )
    .refine(
      (file: File | string | undefined | unknown) =>
        file === undefined ||
        typeof file === "string" ||
        (file instanceof File && file.size <= 5 * 1024 * 1024),
      "Image must be ≤ 5MB"
    ),
});

export type UpdateProductFormData = z.infer<typeof updateProductSchema>;
