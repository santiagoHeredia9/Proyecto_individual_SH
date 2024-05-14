const filterByContinent = async (req, res) => {
    try {
      const { countries, continent } = req.body;
      const filteredCountries = countries.filter(country => country.continent === continent);
      return res.status(200).json(filteredCountries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  module.exports = filterByContinent