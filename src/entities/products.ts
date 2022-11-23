import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("produtos")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  produto: string;

  @Column("decimal", { precision: 10, scale: 2 })
  valor: number;

  @Column()
  descricao: string;

  @Column()
  created: Date;

  @Column()
  updated: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
