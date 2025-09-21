import express from "express";
import { orderController } from "./order.orderController";

const router = express.Router();

router.post("/create-order",orderController.createOrder)

export const orderRoutes = router;