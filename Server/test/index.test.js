const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

const character1 = {
  id: 1,
  name: "Felipe",
  gender: "Male",
};
const character2 = {
  id: 2,
  name: "Juan",
  gender: "Male",
};

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/3000").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Responde con un access: true cuando los datos estan bien", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=Felipe@gmail.com&password=asd123"
      );
      expect(response.body).toEqual({ access: true });
    });

    it("Responde con un access: false cuando los datos esta mal", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=Aa@gmail.com&password=Aa1234"
      );
      expect(response.body).toEqual({ access: false });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Responde con los objetos enviados", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character1);
      expect(response.body).toEqual([character1]);
      const response2 = await agent.post("/rickandmorty/fav").send(character2);
      expect(response2.body).toEqual([character1, character2]);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si no exite el ID, retorna un arreglo de los elemento previos", async () => {
      const response = await agent.delete("/rickandmorty/fav/30");
      expect(response.body).toEqual([character1, character2]);
    });
    
    it("Elimina correctamente el personaje", async () => {
      const response = await agent.delete("/rickandmorty/fav/1");
      expect(response.body).toEqual([character2]);
    });
  });
});
