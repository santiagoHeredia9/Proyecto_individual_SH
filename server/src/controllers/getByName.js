const Sequelize = require("sequelize")
const { Country } = require("../db");

const getByName = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: "Missing Query parameter" });
    }
    const countryName = await Country.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${name}%`,
        },
      },
    });
    if (!countryName || countryName.length === 0) {
      return res.status(404).json({ message: `No countries found with name: ${name}` });
    }

    return res.status(200).json(countryName);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getByName;
