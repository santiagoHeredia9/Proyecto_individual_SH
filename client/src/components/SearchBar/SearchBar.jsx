// import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { byName } from "../../redux/actions";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [data, setData] = useState("");

  const dispatch = useDispatch();

  const handleData = (e) => {
    setData(e.target.value);
  };

  const searchCountry = (e) => {
    e.preventDefault();
    data && dispatch(byName(data));
  };

  return (
    <form className={styles.container}>
      <input type="search" value={data} onChange={handleData} />
      <button onClick={searchCountry}>Buscar</button>
    </form>
  );
};
