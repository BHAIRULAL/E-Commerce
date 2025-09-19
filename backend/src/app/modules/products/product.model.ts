import { model, Schema } from "mongoose";
import { InventoryType, ProductType, VariantType } from "./product.interface";

const VariantSchema = new Schema<VariantType>({
  type: String,
  value: String,
}, { _id: false });
const InventorySchema = new Schema<InventoryType>({
  quantity: Number,
  inStock: Boolean,
}, { _id: false });

const ProductSchema = new Schema<ProductType>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: Number,
  tags: [String],
  variants: [VariantSchema],
  inventory: InventorySchema,
});

export const ProductModel = model("Product", ProductSchema);
