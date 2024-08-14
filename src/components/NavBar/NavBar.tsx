import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

interface NavBarProps {}

function NavBar(props: NavBarProps): React.JSX.Element {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <ThemeSwitcher />
    </nav>
  );
}

export default NavBar;
