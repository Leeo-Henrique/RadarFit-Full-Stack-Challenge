import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { productRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use("/produtos", productRoutes());

const port = process.env.PORT || 3000;

export default app;
