const { Country } = require("../db");

const createCountry = async (req, res) => {
  const { id, name, flag, continent, capital, population } = req.body;
  if (!id || !name || !flag || !continent || !capital || !population) {
    return res.status(404).json({ message: "Missing data" });
  }

  try {
    const newCountry = await Country.create({
      id,
      name,
      flag,
      continent,
      capital,
      population,
    });

    return res.status(201).json(newCountry);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = createCountry