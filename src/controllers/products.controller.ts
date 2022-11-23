import { createAnProductService } from "../services/product/product-create";
import {
  getAnProductService,
  getProducts,
  getProductByParams,
} from "../services/product/get-products";

import { putAnProductService } from "../services/product/put-products";
import { patchAnProductService } from "../services/product/patch-product";
import { deleteAnProductService } from "../services/product/delete-product";
import { Request, Response } from "express";
import { handleError } from "../errors/appError";
import { Iproduct } from "../interfaces";

export const listAnProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await getAnProductService(id);
    return res.status(200).json(product);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    return res.status(200).json(products);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const listProductsByQuery = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const products = await getProductByParams(query);
    return res.status(200).json(products);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const createAnProduct = async (req: Request, res: Response) => {
  try {
    const { descricao, produto, valor }: Iproduct = req.body;
    const productCreated = await createAnProductService({
      descricao,
      produto,
      valor,
    });

    return res.status(201).json(productCreated);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const updatePutAnProduct = async (req: Request, res: Response) => {
  try {
    const bodyProduct = req.body;
    const id = req.params.id;
    const product = {
      ...bodyProduct,
      id: id,
    };
    const productCreated = await putAnProductService(product);

    return res.status(200).json(productCreated);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const updatePatchAnProduct = async (req: Request, res: Response) => {
  try {
    const bodyProduct = req.body;
    const id = req.params.id;
    const product = {
      ...bodyProduct,
      id: id,
    };
    const productCreated = await patchAnProductService(product);

    return res.status(200).json(productCreated);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const deleteAnProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteAnProductService(id);
    return res.status(204).send();
  } catch (error: any) {
    handleError(error, res);
  }
};
