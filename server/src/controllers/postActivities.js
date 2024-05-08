const { Activity, Country } = require("../db");

const postActivity = async (req, res) => {
  const { name, difficulty, season, countries } = req.body;

  if (!name || !difficulty || !season || !countries || countries.length === 0) {
    return res.status(400).json({ message: "Missing data" });
  }

  try {
    const activity = await Activity.create({
      name,
      difficulty,
      season,
    });

    const countriesToAssociate = await Country.findAll({
      where: {
        id: countries,
      },
    });

    if (countriesToAssociate.length === 0) {
      return res.status(404).json({ message: "No valid countries found" });
    }

    await activity.addCountries(countriesToAssociate);

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postActivity;
