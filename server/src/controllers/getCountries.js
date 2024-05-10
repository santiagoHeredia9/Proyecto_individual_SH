const { Country } = require("../db");

const getCountries = async (req, res) => {
  try {
    const countries = await Country.findAll({
      attributes: ["id", "name", "flag", "continent", "population"]
    });
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCountries;
