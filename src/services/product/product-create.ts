import { Iproduct, IProductCreated } from "../../interfaces";
import { Product } from "../../entities/products";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

export const createAnProductService = async ({
  descricao,
  produto,
  valor,
}: Iproduct): Promise<IProductCreated> => {
  const productsRepository = AppDataSource.getRepository(Product);
  if (valor < 0) {
    const message = "Valor não pode ser menor que 0";
    const statusCode = 400;
    throw new AppError(statusCode, message);
  }
  
  if(descricao.length === 0){
    const message = "O produto precisa de um nome";
    const statusCode = 400;
    throw new AppError(statusCode, message);
  }
  
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
