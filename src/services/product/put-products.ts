import { IproductPatched } from "../../interfaces";
import { Product } from "../../entities/products";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

export const putAnProductService = async ({ ...product }: IproductPatched) => {
  const productsRepository = AppDataSource.getRepository(Product);
  const findProduct = await productsRepository.findOneBy({ id: product.id });

  if (!findProduct) {
    if (!product.valor && !product.descricao && !product.produto) {
      const badRequest = 400;
      const message = `Para criar um produto e necessario {valor, descricao e produto}`;
      throw new AppError(badRequest, message);
    }
    return productsRepository.create({ ...product });
  }
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
  return productsRepository.save({
    descricao: product.descricao ? product.descricao : findProduct!.descricao,
    produto: product.produto ? product.produto : findProduct!.produto,
    valor: product.valor ? product.valor : findProduct!.valor,
    id: findProduct!.id,
    created: product.created ? product.created : findProduct!.created,
    updated: new Date(),
  });
};
