const request = require("supertest");
const server = require("../src/server");

describe("Backend Routes", () => {
  it("GET country by name", async () => {
    const response = await request(server).get(
      "/countries/name?name=argentina"
    );
    expect(response.statusCode).toEqual(200);
  });

  it("GET country by name", async () => {
    const response = await request(server).get("/countries/name?name=ar");
    expect(response.statusCode).toEqual(200);
  });

  it("GET country by name fail", async () => {
    const response = await request(server).get(
      "/countries/name?name=unPaisQueNoExista"
    );
    expect(response.statusCode).toEqual(404);
  });

  it("GET first 10 countries", async () => {
    const response = await request(server).get("/countries/limited");
    expect(response.statusCode).toEqual(200);
  });

  it("GET first 5 countries", async () => {
    const response = await request(server).get("/countries/limited?limited=5");
    expect(response.statusCode).toEqual(200);
  });

  it("Fail Delete activity", async () => {
    const response = await request(server).delete("/activities/hola");
    expect(response.statusCode).toEqual(404);
  });

  it("Delete activity", async () => {
    const response = await request(server).delete("/activities/1");
    expect(response.statusCode).toEqual(200);
  });
});
