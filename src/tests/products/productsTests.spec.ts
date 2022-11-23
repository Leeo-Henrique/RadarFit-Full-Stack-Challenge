import request from "supertest";
import app from "../../app";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";

const myProduct = {
  valor: 12.93,
  descricao: "produto de limpeza",
  produto: "supermusculo",
};

const createdProduct = {
  id: "bd79c58a-3c18-4286-b4cf-da69bbfd4d0a",
  produto: "prodtest",
  valor: 1236,
  descricao: "string",
  created: "2022-11-23T18:41:15.198Z",
  updated: "2022-11-23T18:41:15.198Z",
};

describe("Create an product", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => console.log(err));
  });

  afterAll(async () => {
    await connection.destroy();
  });
  test("Should be able to list the products", async () => {
    await request(app).post(`/produtos`).send(myProduct);
    const res = await request(app).get("/produtos");

    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toMatchObject(myProduct);
    expect(res.status).toBe(200);
  });
  test("Should be able to create an product", async () => {
    const response = await request(app).post(`/produtos`).send(myProduct);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("descricao");
    expect(response.body).toHaveProperty("produto");
    expect(response.body).toHaveProperty("valor");
    expect(response.body).toHaveProperty("id");
  });

  test("Should be able to patch an product", async () => {
    const patchedBody = {
      produto: "SuperLimpeza",
    };
    await request(app).post(`/produtos`).send(myProduct);
    const products = await request(app).get("/produtos");
    const idProduct = products.body[0].id;
    const res = await request(app)
      .patch(`/produtos/${idProduct}`)
      .send(patchedBody);
    expect(res.body.produto).toBe(patchedBody.produto);
    expect(res.status).toBe(200);
  });

  test("Should be able to put an product", async () => {
    const updatedBody = {
      produto: "SuperLimpeza",
      created: "2022-11-20T18:22:22.720Z",
    };
    await request(app).post(`/produtos`).send(myProduct);
    const products = await request(app).get("/produtos");
    const idProduct = products.body[0].id;
    const res = await request(app)
      .put(`/produtos/${idProduct}`)
      .send(updatedBody);
    expect(res.body.produto).toBe(updatedBody.produto);
    expect(res.body.created).toBe(updatedBody.created);
    expect(res.status).toBe(200);
  });

  test("Should be able to delete an product", async () => {
    const patchedBody = {
      produto: "SuperLimpeza",
    };
    await request(app).post(`/produtos`).send(myProduct);
    const products = await request(app).get("/produtos");
    const idProduct = products.body[0].id;
    const res = await request(app)
      .delete(`/produtos/${idProduct}`)
      .send(patchedBody);

    expect(res.body).toEqual({});
    expect(res.status).toBe(204);
  });
});
