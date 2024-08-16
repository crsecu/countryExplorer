import { NavLink } from "react-router-dom";

function NavBar(): React.JSX.Element {
  return (
    <nav>
      <NavLink to="/">
        <h1>Where in the world?</h1>
      </NavLink>
    </nav>
  );
}

export default NavBar;
