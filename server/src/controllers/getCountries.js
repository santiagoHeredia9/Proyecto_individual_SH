const { Country } = require("../db");

const getCountries = async (req, res) => {
  try {
    const countries = await Country.findAll({
      attributes: ["id", "name", "flag", "continent", "population"],
    });

    return res.status(200).json(countries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getCountries;
