const { Country, Activity } = require("../db");

const getCountryById = async (req, res) => {
  const { id } = req.params;
  try {
    const country = await Country.findOne({
      where: { id: id },
      include: { model: Activity },
    });

    if (!country) {
      res.status(404).json({ message: "The ID does not exist" });
    }
    return res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCountryById;
