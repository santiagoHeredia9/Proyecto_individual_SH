import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { validate } from "./validate";
import axios from "axios";
// import axios from "axios";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    season: "",
    countries: [],
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    difficulty: "",
    season: "",
    countries: [],
  });
  const [countryOptions, setCountryOptions] = useState([]);

  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    const options = allCountries.map((country) => (
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    ));

    setCountryOptions(options);
    console.log(options);
  }, [allCountries]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountrySelection = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      countries: [...formData.countries, value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      axios
        .post("http://localhost:3001/activities", formData)
        .then(() => {
          alert("Activity was created successfully");
        })
        .catch((error) => {
          console.error("Error creating activity:", error);
        });
    }
  };

  return (
    <section>
      <h1>Formulario para Crear Actividad Turística</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <span>{formErrors.name}</span>
        </div>
        <div>
          <label htmlFor="difficulty">Dificultad:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <span>{formErrors.difficulty}</span>
        </div>

        <div>
          <label htmlFor="season">Temporada:</label>
          <select
            id="season"
            name="season"
            value={formData.season}
            onChange={handleInputChange}
          >
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
          </select>
          <span>{formErrors.season && formErrors.season}</span>
        </div>
        <div>
          <label htmlFor="countries">Países:</label>
          <select
            id="countries"
            name="countries"
            multiple
            onChange={handleCountrySelection}
          >
            {countryOptions}
          </select>
          <span>{formErrors.countries}</span>
        </div>
        <button type="submit">Crear Actividad Turística</button>
      </form>
    </section>
  );
};
