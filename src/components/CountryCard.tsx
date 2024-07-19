import { Link } from "react-router-dom";

function CountryCard(): React.JSX.Element {
  const name = "United States";

  return (
    <li>
      <Link to={`/country/${name}`}>
        <h2>Country Card</h2>
      </Link>
    </li>
  );
}

export default CountryCard;
