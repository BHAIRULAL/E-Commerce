import mongoose from "mongoose";
import { OrderType } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderInDB = async (
  orderData: OrderType,
  session: mongoose.ClientSession
) => {
  const result = await OrderModel.create([orderData], { session });
  return result;
};

export const orderServices = {
  createOrderInDB,
};
