import { Request, Response } from "express";
import productValidationSchema from "./product.validation";
import { productServices } from "./product.sevices";

const createProduct = async (req: Request, res: Response) => {
  try {
    const zodParser = productValidationSchema.parse(req.body);
    const result = await productServices.createProductInDB(zodParser);

    res.status(200).json({
      status: true,
      message: "Product added successfully",
      data: result,
    });

  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        status: false,
        message: error.errors.map((err: any) => err.message), // only show messages
      });
    }

    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await productServices.getAllProductsFromDB(searchTerm as string);

    res.status(200).json({
      status: true,
      message: "Product list",
      data: result,
    });

  } catch (error: any) {
    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
};
const getProductDetails = async (req: Request<{ productId: string }>, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getProductDetailsFromDB(productId);

    res.status(200).json({
      status: true,
      message: "Product details",
      data: result,
    });

  } catch (error: any) {
    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
};

const updateProductDetails = async (req: Request<{ productId: string }>, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.updateProductDetailsInDB(productId, req.body);

    res.status(200).json({
      status: true,
      message: "Product details updated successfully",
      data: result,
    });

  } catch (error: any) {
    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
}
const deleteProduct = async (req: Request<{ productId: string }>, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductFromDB(productId);

    res.status(200).json({
      status: true,
      message: "Product deleted successfully",
      data: result,
    });

  } catch (error: any) {
    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
}

export const productController = {
  createProduct,
  getAllProducts,
  getProductDetails,
  updateProductDetails,
  deleteProduct
};
