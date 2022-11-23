import { IproductPatched } from "../../interfaces";
import { Product } from "../../entities/products";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

export const deleteAnProductService = async (id: string) => {
  const productsRepository = AppDataSource.getRepository(Product);
  const findProduct = await productsRepository.findOneBy({ id: id });
  if (!findProduct) {
    const statusNotFound = 404;
    const message = "Produto não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return productsRepository.delete(findProduct!);
};
