import express from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.routes";
const app = express();

//parser options
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/api/products", ProductRoutes);

export default app;
