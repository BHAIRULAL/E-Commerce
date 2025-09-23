import express from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/products/product.routes";
import { orderRoutes } from "./app/modules/order/order.routes";
import { userRoutes } from "./app/modules/user/user.routes";
const app = express();

//parser options
app.use(express.json());
app.use(cors());

//routes
app.use("/api/products", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/user", userRoutes);

export default app;
