import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteActivity, getActivities } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Activity.module.css";

export const Activity = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  // Obtener actividades
  useEffect(() => {
    dispatch(getActivities());
  }, [activities.length]);

  //Borrar actividad
  const deleteActivities = (id) => {
    dispatch(deleteActivity(id));
  };
  // Funcion de dificultad
  const getDifficultyStyle = (difficulty) => {
    switch (difficulty) {
      case "1":
        return styles.easy;
      case "2":
        return styles.easy2;
      case "3":
        return styles.mid;
      case "4":
        return styles.hard;
      default:
        return styles.hard2;
    }
  };

  return (
    // Mapear actividades si existen, si no mostrar mensaje.
    <div className={styles.container}>
      {Object.keys(activities).length !== 0 ? (
        activities.map((activity) => (
          <div className={styles.containerActivity} key={activity.id}>
            <div className={styles.activity}>
              <p>Activity: {activity.name}</p>
              <button
                className={styles.delete}
                onClick={() => deleteActivities(activity.id)}
              >
                ×
              </button>
            </div>

            <div className={styles.accordion}>
              <div className={styles.info}>
                <p>
                  Difficulty:{" "}
                  <strong className={getDifficultyStyle(activity.difficulty)}>
                    {activity.difficulty}
                  </strong>
                </p>
                <p>Season: {activity.season}</p>
              </div>
              <div className={styles.country}>
                {activity.Countries.map((country) => (
                  <div className={styles.flag} key={country.id}>
                    <img src={country.flag} alt={country.name} />
                    <p>{country.id}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noActivities}>
          <p>You dont have any activities yet, do you want to create one? </p>
          <Link to="/form">
            <button>Here!</button>
          </Link>
        </div>
      )}
    </div>
  );
};
