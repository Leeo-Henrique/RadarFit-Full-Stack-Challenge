import {
  createAnProduct,
  deleteAnProductById,
  listAnProductById,
  listProducts,
  updatePutAnProduct,
  updatePatchAnProduct,
  listProductsByQuery,
} from "../controllers/products.controller";

import { Router } from "express";

const routes = Router();

export const productRoutes = () => {
  routes.post("/", createAnProduct);
  routes.get("/", listProducts);
  routes.get("/find", listProductsByQuery);
  routes.get("/:id", listAnProductById);
  routes.put("/:id", updatePutAnProduct);
  routes.patch("/:id", updatePatchAnProduct);
  routes.delete("/:id", deleteAnProductById);
  return routes;
};
