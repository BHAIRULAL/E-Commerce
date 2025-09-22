import express from "express";
import { orderController } from "./order.orderController";

const router = express.Router();

router.post("/create-order", orderController.createOrder);
router.get("/order-list", orderController.orderList);

export const orderRoutes = router;
