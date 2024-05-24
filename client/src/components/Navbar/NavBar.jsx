import World from "../Icons/World";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className={styles.container}>
      <div>
        <NavLink to="/">
          <World className={styles.icon} />
        </NavLink>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navItems}>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <h5 className={styles.navItem}>HOME</h5>
          </NavLink>

          <NavLink
            to="/activities"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <h5 className={styles.navItem}>ACTIVITIES</h5>
          </NavLink>

          <NavLink
            to="/form"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <h5 className={styles.navItem}>FORM</h5>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
