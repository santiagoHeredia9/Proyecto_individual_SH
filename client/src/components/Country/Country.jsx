import { deleteCountry } from "../../redux/actions";

import styles from "./Country.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Country = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img src={props.flag} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.continent}</p>
        <Link to={`/detail/${props.id}`}>
          <p className={styles.details}>View details</p>
        </Link>
        
      </div>

      <button onClick={() => dispatch(deleteCountry(props.id))}>x</button>
    </div>
  );
};
