export interface Iproduct {
  produto: string;
  valor: number;
  descricao: string;
}

export interface IProductCreated extends Iproduct {
  created: Date;
  updated: Date;
  id: string;
}
export interface IproductPatched {
  id: string;
  produto?: string;
  valor?: number;
  descricao?: string;
  created?: Date;
  updated?: Date;
}
