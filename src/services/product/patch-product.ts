import { IproductPatched } from "../../interfaces";
import { Product } from "../../entities/products";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

export const patchAnProductService = async ({
  ...product
}: IproductPatched) => {
  const productsRepository = AppDataSource.getRepository(Product);
  const findProduct = await productsRepository.findOneBy({ id: product.id });

  if (product.valor! < 0) {
    const message = "Valor não pode ser menor que 0";
    const statusCode = 400;
    throw new AppError(statusCode, message);
  }

  if (product.produto!.length === 0) {
    const message = "O produto precisa de um nome";
    const statusCode = 400;
    throw new AppError(statusCode, message);
  }

  if (!findProduct) {
    const statusNotFound = 404;
    const message = "Produto não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return productsRepository.save({
    descricao: product.descricao ? product.descricao : findProduct!.descricao,
    produto: product.produto ? product.produto : findProduct!.produto,
    valor: product.valor ? product.valor : findProduct!.valor,
    id: findProduct!.id,
    created: findProduct!.created,
    updated: new Date(),
  });
};
