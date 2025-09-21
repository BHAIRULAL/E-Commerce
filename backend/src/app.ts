import express from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/products/product.routes";
import { orderRoutes } from "./app/modules/order/order.routes";
const app = express();

//parser options
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/api/products", productRoutes);
app.use("/api/order", orderRoutes);

export default app;
