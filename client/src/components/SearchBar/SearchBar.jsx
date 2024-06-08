import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Icons/Search";
import styles from "./SearchBar.module.css";
import { byName } from "../../redux/actions"; // Importa la acción para la búsqueda por nombre

// eslint-disable-next-line react/prop-types
export const SearchBar = ({ setFilteredCountries }) => {
  const [data, setData] = useState("");
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  const handleData = (e) => {
    setData(e.target.value);
  };

  const searchCountry = async (e) => {
    e.preventDefault();
    if (data.trim()) {
      // Filtrar localmente
      const filtered = allCountries.filter((country) =>
        country.name.toLowerCase().includes(data.trim().toLowerCase())
      );

      if (filtered.length > 0) {
        setFilteredCountries(filtered);
      } else {
        // Si no se encuentra en la lista local, realiza una búsqueda en el servidor
        const response = await dispatch(byName(data));
        if (response && response.payload && response.payload.length > 0) {
          setFilteredCountries(response.payload);
        } else {
          alert("No country found with that name");
        }
      }
    } 
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        value={data}
        onChange={handleData}
        placeholder="Search countries..."
      />
      <a href="#" onClick={searchCountry}>
        <Search className={styles.lupe} />
      </a>
    </div>
  );
};
