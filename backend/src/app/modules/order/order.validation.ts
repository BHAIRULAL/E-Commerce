import { z } from "zod";

const orderValidationSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      }).min(1, "Email cannot be empty"),

    productId: z.string({
        required_error: "Product ID is required",
        invalid_type_error: "Product ID must be a string as Mongodb _id",
      }).min(1, "Product ID cannot be empty"),

    quantity: z.number({
        required_error: "Quantity is required",
        invalid_type_error: "Quantity must be a number",
      }).min(1, "Quantity cannot be empty"),
      
    price: z.number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
      }).min(1, "Price cannot be empty"),
});

export default orderValidationSchema;