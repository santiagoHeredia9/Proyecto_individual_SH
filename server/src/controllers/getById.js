const { Country, Activity } = require("../db");

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const countryId = await Country.findOne({
      where: { id: id },
      include: { model: Activity },
    });

    if (!countryId) {
      return res.status(404).json({ message: "The ID does not exist" });
    }
    return res.status(200).json(countryId);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getById;
