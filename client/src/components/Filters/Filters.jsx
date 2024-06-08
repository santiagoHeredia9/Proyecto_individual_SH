/* eslint-disable react/prop-types */

import { filter, filterAll, orderCountries } from "../../redux/actions";
import styles from "./Filters.module.css";
import { useDispatch } from "react-redux";

export const Filters = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    if (e.target.value === "all") {
      dispatch(filterAll());
    } else {
      dispatch(filter(e.target.value));
    }
  };

  const handleOrder = (e) => {
    const [order, direction] = e.target.value.split("_");
    dispatch(orderCountries(order, direction));
  };
  
  return (
    <article className={styles.container}>
      <select className={styles.select1} onChange={handleFilter}>
        <option>Select Continent</option>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>

      <select className={styles.select2} onChange={handleOrder}>
        <option value="">Select order</option>
        <option value="name_ASC">By name(ASC)</option>
        <option value="name_DESC">By name(DESC)</option>
        <option value="population_ASC">By Population(ASC)</option>
        <option value="population_DESC">By Population(DESC)</option>
      </select>
    </article>
  );
};
