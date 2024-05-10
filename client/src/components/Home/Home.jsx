import axios from "axios";
import { useEffect, useState } from "react";
import { Country } from "../Country/Country";
import styles from "./Home.module.css";
import { SearchBar } from "../SearchBar/SearchBar";

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/countries/limited?limit=10").then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <>
      <aside>
        <SearchBar countries={countries} setCountries={setCountries} />
      </aside>
      <main>
        <div className={styles.cardContainer}>
          {countries.length > 0 ? (
            countries.map((country) => (
              <Country
                key={country.id}
                name={country.name}
                flag={country.flag}
                population={country.population}
                continent={country.continent}
              />
            ))
          ) : (
            <p>There is not countries yet...</p>
          )}
        </div>
      </main>
    </>
  );
};
