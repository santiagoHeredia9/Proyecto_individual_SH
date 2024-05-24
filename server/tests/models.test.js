const { Sequelize } = require("sequelize");
const { Country } = require("../src/db");

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize("countries", "postgres", "basedesanti", {
  host: "localhost",
  dialect: "postgres",
});

beforeAll(async () => {
  // Conectarse a la base de datos
  await sequelize.authenticate();
});

afterAll(async () => {
  // Cerrar la conexión con la base de datos
  await sequelize.close();
});

describe("Country Model", () => {
  beforeAll(async () => {
    // Sincronizar el modelo con la base de datos
    await Country.sync({ force: true });
  });

  // Prueba de creación de país con datos válidos
  it("should allow creation of country with valid data", async () => {
    const country = await Country.create({
      id: "ken",
      name: "Kenya",
      flag: "\uD83C\uDDF0\uD83C\uDDEA",
      continent: "Africa",
      capital: "Nairobi",
      population: 53771300,
    });
    expect(country).toBeDefined();
    expect(country.id).toBe("ken");
    expect(country.name).toBe("Kenya");
    expect(country.flag).toBe("\uD83C\uDDF0\uD83C\uDDEA");
    expect(country.continent).toBe("Africa");
    expect(country.capital).toBe("Nairobi");
    expect(country.population).toBe(53771300);
  });

  // Resto de las pruebas...
});
