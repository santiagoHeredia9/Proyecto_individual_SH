const request = require("supertest");
const server = require("../src/server");

xdescribe("Backend Routes", () => {
  test("GET country by name", async () => {
    const response = await request(server).get(
      "/countries/name?name=argentina"
    );
    expect(response.statusCode).toEqual(200);
  });

  test("GET country by name", async () => {
    const response = await request(server).get(
      "/countries/name?name=ARgentina"
    );
    expect(response.statusCode).toEqual(200);
  });

  test("GET country by name fail", async () => {
    const response = await request(server).get(
      "/countries/name?name=unPaisQueNoExista"
    );
    expect(response.statusCode).toEqual(404);
  });

  test("GET first 10 countries", async () => {
    const response = await request(server).get("/countries/limited");
    expect(response.statusCode).toEqual(200);
  });

  test("GET first 5 countries", async () => {
    const response = await request(server).get("/countries/limited?limited=5");
    expect(response.statusCode).toEqual(200);
  });
});
