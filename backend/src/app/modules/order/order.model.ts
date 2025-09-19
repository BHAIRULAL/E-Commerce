import { model, Schema } from "mongoose";
import { OrderType } from "./order.interface";

const OrderSchema = new Schema<OrderType>({
  productId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },

});

export const OrderModel = model("Order", OrderSchema);
