import axios from "axios";
import { filter, filterAll } from "../../redux/actions";
import styles from "./Filters.module.css";
import { useDispatch } from "react-redux";

export const Filters = ({ allCountries }) => {
  const dispatch = useDispatch();
  const handleFilter = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/countries/filterByContinent",
        { continent: e.target.value, countries: allCountries }
      );

      if (e.target.value === "all") {
        dispatch(filterAll());
      } else {
        dispatch(filter(response.data));
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <article>
      <select className={styles.select2} onChange={handleFilter}>
        <option>Select Continent</option>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
    </article>
  );
};
