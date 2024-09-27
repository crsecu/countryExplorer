import styles from "./ThemeSwitcher.module.css";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";

interface ThemeSwitcherProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

function ThemeSwitcher({
  setTheme,
  theme,
}: ThemeSwitcherProps): React.JSX.Element {
  const newTheme = theme === "light" ? "dark" : "light";
  function switchTheme() {
    setTheme(newTheme);
  }
  console.log("current theme", theme);

  return (
    <button
      className={`${styles.themeSwitcher} ${styles.resetButtonStyle} `}
      onClick={switchTheme}
    >
      {newTheme === "dark" ? (
        <Moon className={styles.darkModeIcon} />
      ) : (
        <Sun className={styles.lightModeIcon} />
      )}
      <span>{newTheme} Mode</span>
    </button>
  );
}

export default ThemeSwitcher;
