import World from "../Icons/World";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <World className={styles.icon} />
      </div>

      <div className={styles.navItems}>
        <Link to="/home">
          <h5>Home</h5>
        </Link>

        <h5>About</h5>
        <h5>Activities</h5>
      </div>
    </nav>
  );
};
