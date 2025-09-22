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
const getOrderListFromDB = async (email: string) => {
  const query = email ? { email: email } : {};
  const result = await OrderModel.find(query);
  return result;
};

export const orderServices = {
  createOrderInDB,
  getOrderListFromDB,
};
