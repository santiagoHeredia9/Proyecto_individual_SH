import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { byId } from "../../redux/actions";
import styles from "./CountryDetail.module.css";

export const CountryDetail = () => {

  const country = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  //Funcion para hacer las legible el numero de habitantes
  const formatearPoblacion = (number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'k';
    }
    return number;
  };

  useEffect(() => {
    dispatch(byId(id));
  }, [id]);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.book2}>
          <div className={styles.book}>
            <div>
              <img src={country.flag} alt={country.name} />
            </div>
            <div>
              <h2 className={styles.name}>{country.name} </h2>
            </div>
          </div>
        </div>
        <div className={styles.book4}>
          <div className={styles.book3}>
            <div className={styles.info}>
              <p>
                ID: <strong>{country.id}</strong>
              </p>

              <p>
                Capital: <strong>{country?.capital}</strong>{" "}
              </p>

              <p>
                Continent: <strong>{country.continent}</strong>
              </p>

              <p>
                Population:{" "}
                <strong>{formatearPoblacion(country.population)}</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <img className={styles.image} src="/brujula.png" alt="brujula" />
      <img className={styles.image2} src="/brujula.png" alt="brujula" />
    </section>
  );
};
