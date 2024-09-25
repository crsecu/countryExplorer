import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar(): React.JSX.Element {
  return (
    <nav className={styles.nav}>
      <Link to="/" aria-label="Go to homepage">
        <span className={styles.logoTitle}>Where in the world?</span>
      </Link>{" "}
    </nav>
  );
}

export default NavBar;
