const { Country } = require("../db");
const axios = require("axios");

const firstFetch = async () => {
  try {
    const response = await axios("http://localhost:5000/countries");

    const countries = response.data;

    for (const country of countries) {
      const capital =
        country.capital && country.capital.length > 0
          ? country.capital[0]
          : "N/A";

      await Country.create({
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continent: country.continents[0],
        capital,
        population: country.population,
      });
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

module.exports = firstFetch;
