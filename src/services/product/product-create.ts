import { Iproduct, IProductCreated } from "../../interfaces";
import { Product } from "../../entities/products";
import { AppDataSource } from "../../data-source";

export const createAnProductService = async ({
  descricao,
  produto,
  valor,
}: Iproduct): Promise<IProductCreated> => {
  const productsRepository = AppDataSource.getRepository(Product);

  const newProduct = productsRepository.create({
    descricao,
    produto,
    valor,
    created: new Date(),
    updated: new Date(),
  });

  await productsRepository.save(newProduct);
  return newProduct;
};
