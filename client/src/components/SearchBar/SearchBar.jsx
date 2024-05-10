// import styles from "./SearchBar.module.css";
import axios from "axios";
import { useState } from "react";

export const SearchBar = (props) => {
  const [data, setData] = useState("");
  const handleData = (e) => {
    setData(e.target.value);
  };
  const searchCountry = (e) => {
    e.preventDefault();
    data &&
      axios(`http://localhost:3001/countries/name?name=${data}`)
        .then((response) => {
          if (response && response.data) {
            props.setCountries(response.data); // Verifica que response.data exista
          }
        })
        .catch((error) => {
          console.error(error);
        });
  };
  return (
    <form action="">
      <input type="search" value={data} onChange={handleData} />
      <button onClick={searchCountry}>Buscar</button>
    </form>
  );
};
