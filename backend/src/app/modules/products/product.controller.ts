import { Request, Response } from "express";

const createProduct = (req: Request, res: Response) => {
  try {
    res.send("Product route is running");
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error.message,
      error: error,
    });
  }
};

export const productController = {
  createProduct,
};
