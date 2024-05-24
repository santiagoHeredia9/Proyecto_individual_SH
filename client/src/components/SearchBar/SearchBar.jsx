// import styles from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { byName } from "../../redux/actions";
import Search from "../Icons/Search";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [data, setData] = useState("");

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const handleData = (e) => {
    setData(e.target.value);
  };

  const searchCountry = async (e) => {
    e.preventDefault();
    if (data.trim()) {
      const existingCountry = countries.some(
        (country) =>
          country.name.trim().toLowerCase() === data.trim().toLowerCase()
      );

      if (existingCountry) {
        alert("The country is already in the list");
      }

      const response = await dispatch(byName(data));

      if (response && response.error) {
        alert(response.error.message);
      }
    } else {
      alert("Must contain countries for the search");
    }
  };

  return (
    <div className={styles.container}>
      <input type="search" value={data} onChange={handleData} />
      <a href="#" onClick={searchCountry}>
        <Search className={styles.lupe} />
      </a>
    </div>
  );
};
