interface ThemeSwitcherProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

function ThemeSwitcher({
  setTheme,
  theme,
}: ThemeSwitcherProps): React.JSX.Element {
  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  console.log("current theme", theme);

  return <button onClick={switchTheme}>Theme Switcher</button>;
}

export default ThemeSwitcher;
