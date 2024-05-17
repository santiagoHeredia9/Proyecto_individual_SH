import { useEffect } from "react";
import { Country } from "../Country/Country";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { changePage, fetchCountries } from "../../redux/actions";
import { Filters } from "../Filters/Filters";
import Arrow from "../Icons/Arrow";

export const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const countries = useSelector((state) => state.countries);
  const countriesPerPage = useSelector((state) => state.countriesPerPage);
  const currentPage = useSelector((state) => state.currentPage);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  useEffect(() => {
    if (allCountries.length === 0) {
      dispatch(fetchCountries());
    }
  }, []);

  return (
    <>
      <aside className={styles.searchContainer}>
        <SearchBar />
      </aside>
      <aside>
        <Filters allCountries={allCountries} />
      </aside>
      <main>
        <div className={styles.cardContainer}>
          {currentCountries.length > 0 ? (
            currentCountries.map((country) => (
              <Country
                id={country.id}
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
        <article className={styles.changer}>
          <button
            onClick={() => dispatch(changePage(currentPage - 1))}
            disabled={currentPage === 1}
          >
            <Arrow className={styles.prev} />
            Prev
          </button>
          <button
            onClick={() => dispatch(changePage(currentPage + 1))}
            disabled={indexOfLastCountry >= countries.length}
          >
            Next <Arrow className={styles.next} />
          </button>
        </article>
      </main>
    </>
  );
};
