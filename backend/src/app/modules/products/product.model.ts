import { model, Schema } from "mongoose";
import { InventoryType, ProductType, VariantType } from "./product.interface";

const VariantSchema = new Schema<VariantType>({
  type: String,
  value: String,
});
const InventorySchema = new Schema<InventoryType>({
  quantity: Number,
  inStock: Boolean,
});

const ProductSchema = new Schema<ProductType>({
  name: {
    type: String,
    required: true,
  },
  brand: String,
  image: String,
  category: String,
  description: String,
  price: Number,
  tags: [String],
  variants: [VariantSchema],
  inventory: InventorySchema,
});

const Product = model("Product", ProductSchema);
