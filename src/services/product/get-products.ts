import { Iproduct, IProductCreated } from "../../interfaces";
import { Product } from "../../entities/products";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

export const getAnProductService = async (id: string) => {
  const productsRepository = AppDataSource.getRepository(Product);
  const products = await productsRepository.find();

  const myProduct = products.filter((product) => product.id === id);

  if (myProduct.length === 0) {
    const statusNotFound = 404;
    const message = "Produto não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return myProduct;
};

export const getProducts = async (): Promise<IProductCreated[]> => {
  const productsRepository = AppDataSource.getRepository(Product);
  const myProduct = productsRepository.find();

  return myProduct;
};

export const getProductByParams = async (
  query: object
): Promise<IProductCreated[]> => {
  const productsRepository = AppDataSource.getRepository(Product);
  const products = await productsRepository.find();

  const queryValue = Object.values(query);

  const productsFiltered = products.filter((product) => {
    // query na posição 0 pois Object.values retorna um vetor
    if (product.produto.includes(queryValue[0])) {
      return product;
    }
    if (Number(product.valor) >= Number(queryValue[0])) {
      return product;
    }
    if (product.descricao.includes(queryValue[0])) {
      return product;
    }
  });
  return productsFiltered;
};
