import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { byId } from "../../redux/actions";
import styles from "./CountryDetail.module.css";

export const CountryDetail = () => {
  const country = useSelector((state) => state.countryDetail);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(byId(id));
  }, [id]);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.book2}>
          <div className={styles.book}>
            <div>
              <img src={country?.flag} alt={country?.name} />
            </div>
            <div>
              <h2>{country?.name} </h2>
            </div>
          </div>
        </div>
        <div className={styles.book4}>
          <div className={styles.book3}>
            <div>
              <p>Population: {country?.population} </p>
              <p>Capital: {country?.capital} </p>
              <p>{country?.activity}</p>
            </div>
          </div>
        </div>
      </div>

      <img className={styles.image} src="/brujula.png" alt="brujula" />
      <img className={styles.image2} src="/brujula.png" alt="brujula" />
    </section>
  );
};
