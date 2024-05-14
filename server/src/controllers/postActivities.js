const { Activity, Country } = require("../db");

const postActivity = async (req, res) => {
  const { name, difficulty, season, countries } = req.body;

  if (!name || !difficulty || !season || !countries || countries.length === 0) {
    return res.status(400).json({ message: "Missing data" });
  }

  try {
    // Obtener la lista completa de países disponibles en la base de datos
    const allCountries = await Country.findAll();
    
    // Verificar si todos los países proporcionados son válidos
    const isValidCountries = countries.every(countryId =>
      allCountries.some(country => country.id === countryId)
    );

    if (!isValidCountries) {
      return res.status(400).json({ message: "One or more invalid countries provided" });
    }

    // Crear la actividad turística
    const activity = await Activity.create({
      name,
      difficulty,
      season,
    });

    // Obtener los objetos de país correspondientes a los IDs proporcionados
    const countriesToAssociate = allCountries.filter(country =>
      countries.includes(country.id)
    );

    // Asociar la actividad turística con los países correspondientes
    await activity.addCountries(countriesToAssociate);

    // Devolver la actividad turística creada
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postActivity;