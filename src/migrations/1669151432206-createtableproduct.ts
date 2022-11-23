import { MigrationInterface, QueryRunner } from "typeorm";

export class createtableproduct1669151432206 implements MigrationInterface {
  name = "createtableproduct1669151432206";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "produtos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "produto" character varying NOT NULL, "valor" numeric(10,2) NOT NULL, "descricao" character varying NOT NULL, "created" TIMESTAMP NOT NULL, "updated" TIMESTAMP NOT NULL, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "produtos"`);
  }
}
