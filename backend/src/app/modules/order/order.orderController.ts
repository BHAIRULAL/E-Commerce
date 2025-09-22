import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { orderServices } from "./order.services";
import { ProductModel } from "../products/product.model";
import mongoose from "mongoose";
import { handleCatchErrors } from "../../utils/helperFunction";
import { AppError } from "../../utils/types";

const createOrder = async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({
      status: false,
      message: "Invalid productId format",
    });
  }
  try {
    const zodParser = orderValidationSchema.parse(req.body);
    const session = await mongoose.startSession();
    let newOrderData = null;
    try {
      await session.withTransaction(async () => {
        const product = await ProductModel.findById(productId).session(session);

        if (!product) {
          throw Object.assign(new Error("Product not available"), {
            statusCode: 404,
          });
        }

        if (product.inventory.quantity < quantity) {
          throw Object.assign(new Error("Insufficient quantity in inventory"), {
            statusCode: 400,
          });
        }

        //Updating product data
        product.inventory.quantity -= quantity;
        product.inventory.inStock = product.inventory.quantity > 0;
        await product.save({ session });

        newOrderData = await orderServices.createOrderInDB(zodParser, session);
      });

      res.status(200).json({
        status: true,
        message: "Order placed successfully",
        data: newOrderData,
      });
    } finally {
      session.endSession();
    }
  } catch (error) {
    handleCatchErrors(error as AppError, res);
  }
};

const orderList = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await orderServices.getOrderListFromDB(email as string);

    if (result.length === 0) {
      return res.status(200).json({
        status: true,
        message: `No orders available for email: ${email}`,
        data: [],
      });
    }
    res.status(200).json({
      status: true,
      message: "Order list",
      data: result,
    });
  } catch (error) {
    handleCatchErrors(error as AppError, res);
  }
};

export const orderController = {
  createOrder,
  orderList,
};
