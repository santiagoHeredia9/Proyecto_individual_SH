const { Activity, Country } = require("../db");

const postActivity = async (req, res) => {
  const { name, difficulty, season, countries } = req.body;

  if (!name || !difficulty || !season || !countries || countries.length === 0) {
    return res.status(400).json({ message: "Missing data" });
  }

  try {
    const allCountries = await Country.findAll();

    const isValidCountries = countries.every((countryId) =>
      allCountries.some((country) => country.id === countryId)
    );

    if (!isValidCountries) {
      return res
        .status(400)
        .json({ message: "One or more invalid countries provided" });
    }

    const activity = await Activity.create({
      name,
      difficulty,
      season,
    });


    await activity.addCountries(countries);

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postActivity;
