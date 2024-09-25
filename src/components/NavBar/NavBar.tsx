import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar(): React.JSX.Element {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" aria-label="Go to homepage">
        <span className={styles.logoTitle}>Where in the world?</span>
      </NavLink>
    </nav>
  );
}

export default NavBar;
