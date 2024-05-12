import World from "../Icons/World";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <NavLink to="/">
          <World className={styles.icon} />
        </NavLink>
      </div>

      <div className={styles.navItems}>
        <NavLink to="/home" activeClassName={styles.activeLink}>
          <h5 className={styles.navItem}>Home</h5>
        </NavLink>

        <NavLink to="/about" activeClassName={styles.activeLink}>
          <h5 className={styles.navItem}>About</h5>
        </NavLink>

        <NavLink to="/activities" activeClassName={styles.activeLink}>
          <h5 className={styles.navItem}>Activities</h5>
        </NavLink>
      </div>
    </nav>
  );
};