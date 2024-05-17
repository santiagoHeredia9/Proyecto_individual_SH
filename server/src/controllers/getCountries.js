const { Country } = require("../db");

const getCountries = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 10;
    const countries = await Country.findAll({
      limit,
      attributes: ["id", "name", "flag", "continent", "population"], 
    });

    return res.status(200).json(countries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getCountries;
