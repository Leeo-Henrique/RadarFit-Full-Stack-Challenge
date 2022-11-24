import "reflect-metadata";
import express from "express";
import { productRoutes } from "./routes";

const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.use("/produtos", productRoutes());

const port = process.env.PORT || 3000;

export default app;
