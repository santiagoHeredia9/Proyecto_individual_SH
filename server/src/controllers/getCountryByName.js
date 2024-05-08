const { Country } = require("../db");

const getCountryByName = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ message: "Missing Query parameter" });
  }

  try {
    const countries = await Country.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${name}%`,
        },
      },
    });

    if (countries.length === 0) {
      return res
        .status(404)
        .json({ message: `No countries found with name: ${name}` });
    }

    return res.status(200).json(countries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getCountryByName;
