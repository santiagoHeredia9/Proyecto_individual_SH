import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className={styles.container}>
      <div className={styles.welcome}>
        <h1>A vast world!</h1>
        <p>
          We live in a marvelous world filled with <strong>diversity</strong>,
          rich in differences that make us <strong>unique</strong>.
        </p>
        <p>
          If you'd like to learn more about different <strong>countries</strong>
          , take a look at our app!
        </p>
        <Link to="/home">
          <button className={styles.button}>Start</button>
        </Link>
      </div>

      <div className={styles.image}>
        <img
          src="/countries.png"
          alt="Image of countries"
          className={styles.landingImage}
        />
      </div>
    </section>
  );
};
