import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { validate } from "./validate";
import styles from "./Form.module.css";
import axios from "axios";
import Error from "../Icons/Error";
import Check from "../Icons/Check";

export const Form = () => {
  //Estado local para guardar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    season: "",
    countries: [],
  });

  //Estado local para guardar los errores del formulario
  const [formErrors, setFormErrors] = useState({
    name: "",
    difficulty: "",
    season: "",
    countries: [],
  });

  //Estado local para guardar las opciones de países
  const [countryOptions, setCountryOptions] = useState([]);

  const allCountries = useSelector((state) => state.allCountries);

  //Llenar las opciones de países
  useEffect(() => {
    const options = allCountries.map((country) => (
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    ));

    setCountryOptions(options);
  }, [allCountries]);

  //Función para validar los campos del formulario
  useEffect(() => {
    setFormErrors(validate(formData));
  }, []);

  //Función para controlar el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors(
      validate({
        ...formData,
        [name]: value,
      })
    );
  };

  const handleCountrySelection = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      countries: [...formData.countries, value],
    });

    setFormErrors(
      validate({
        ...formData,
        countries: [...formData.countries, value],
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = formErrors;

    if (Object.keys(errors).length === 0) {
      axios
        .post("http://localhost:3001/activities", formData)
        .then(() => {
          alert("Activity was created successfully");
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      alert("Please complete the validation");
    }
  };

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Create your own tourist activity</h2>
        <div className={styles.name}>
          <label htmlFor="name">Activity name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.dif}>
          <label htmlFor="difficulty">Select the difficulty:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
          >
            <option value="">Difficulty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className={styles.season}>
          <label htmlFor="season">Select a season:</label>
          <select
            id="season"
            name="season"
            value={formData.season}
            onChange={handleInputChange}
          >
            <option value="">Season</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
          </select>
        </div>
        <div className={styles.countries}>
          <label htmlFor="countries">Select one or more countries:</label>
          <select
            id="countries"
            name="countries"
            multiple
            onChange={handleCountrySelection}
          >
            {countryOptions}
          </select>
        </div>
        <button type="submit">Create</button>
      </form>

      <aside className={styles.validations}>
        <div>
          <p>The activity name must have 5 or more characters</p>
          <p>
            {formErrors.name ? (
              <Error className={styles.error} />
            ) : (
              <Check className={styles.check} />
            )}
          </p>
        </div>

        <div>
          <p>Must select a difficulty</p>
          <p>
            {formErrors.difficulty ? (
              <Error className={styles.error} />
            ) : (
              <Check className={styles.check} />
            )}
          </p>
        </div>

        <div>
          <p>Must select a season</p>
          <p>
            {formErrors.season ? (
              <Error className={styles.error} />
            ) : (
              <Check className={styles.check} />
            )}
          </p>
        </div>

        <div>
          <p>Must select at least one country</p>
          <p>
            {formErrors.countries ? (
              <Error className={styles.error} />
            ) : (
              <Check className={styles.check} />
            )}
          </p>
        </div>
      </aside>
    </section>
  );
};
