import { z } from "zod";

export const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

export const inventoryValidationSchema = z.object({
  quantity: z.number().positive(),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  brand: z.string(),
  image: z.string(),
  category: z.string(),
  description: z.string(),
  price: z.number().positive(),
  tags: z.array(z.string()),
  variants: z.array(variantValidationSchema),
  inventory: z.array(inventoryValidationSchema),
});

export default productValidationSchema;
