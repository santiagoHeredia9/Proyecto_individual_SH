import styles from "./Country.module.css";

export const Country = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.flag} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.continent}</p>
      </div>
    </div>
  );
};
