import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar(): React.JSX.Element {
  return (
    <nav>
      <NavLink to="/">
        <h1 className={styles.logoTitle}>Where in the world?</h1>
      </NavLink>
    </nav>
  );
}

export default NavBar;
