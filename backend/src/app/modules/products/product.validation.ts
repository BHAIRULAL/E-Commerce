import { z } from "zod";

export const variantValidationSchema = z.object({
  type: z.string().min(1, "Variant type is required"),
  value: z.string().min(1, "Variant value is required"),
});

export const inventoryValidationSchema = z.object({
  quantity: z.number({
    required_error: "Quantity is required",
    invalid_type_error: "Quantity must be a number",
  }).positive("Quantity must be greater than zero"),
  inStock: z.boolean({
    required_error: "InStock status is required",
    invalid_type_error: "InStock must be true or false",
  }),
});

const productValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).min(1, "Name cannot be empty"),

  brand: z.string({
    required_error: "Brand is required",
    invalid_type_error: "Brand must be a string",
  }).min(1, "Brand cannot be empty"),

  category: z.string({
    required_error: "Category is required",
    invalid_type_error: "Category must be a string",
  }).min(1, "Category cannot be empty"),

  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description must be a string",
  }).min(1, "Description cannot be empty"),

  price: z.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  }).positive("Price must be greater than zero"),

  tags: z.array(
    z.string().min(1, "Tag cannot be empty"),
    {
      required_error: "Tags are required",
      invalid_type_error: "Tags must be an array of strings",
    }
  ).min(1, "At least one tag is required"),

  variants: z.array(
    variantValidationSchema,
    {
      required_error: "Variants are required",
      invalid_type_error: "Variants must be an array",
    }
  ).min(1, "At least one variant is required"),

  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
