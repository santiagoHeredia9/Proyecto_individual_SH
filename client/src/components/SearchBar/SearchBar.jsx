// import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { byName } from "../../redux/actions";
import Search from "../Icons/Search";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [data, setData] = useState("");

  const dispatch = useDispatch();

  const handleData = (e) => {
    setData(e.target.value);
  };

  const searchCountry = () => {
    
    data && dispatch(byName(data));
  };

  return (
    <div className={styles.container}>
      <input type="search" value={data} onChange={handleData} />
      <a href="#" onClick={searchCountry}><Search className={styles.lupe} /></a>
    </div>
  );
};
