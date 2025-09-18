import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProductDetails);
router.put("/:productId", productController.updateProductDetails);
router.delete("/:productId", productController.deleteProduct);

export const ProductRoutes = router;
