import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

router.post("/add-product", productController.createProduct);
router.get("/product-list", productController.getAllProducts);
router.get("/:productId", productController.getProductDetails);
router.put("/:productId", productController.updateProductDetails);
router.delete("/:productId", productController.deleteProduct);

export const productRoutes = router;
