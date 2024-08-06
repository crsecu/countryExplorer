import { Link } from "react-router-dom";
import { CountryCardProps } from "../types";
import { useCountries } from "../hooks/useCountries";

function CountryCard({ country }: CountryCardProps): React.JSX.Element {
  const { setSearchQuery } = useCountries();

  const {
    capital,
    flags: { svg, alt },
    name: { common: name }, // Destructure nested 'common' property and rename to 'name'
    population,
    region,
    cca3,
  } = country;

  return (
    /* Clear the search field in the search bar when a country card is clicked */
    <li onClick={() => setSearchQuery("")}>
      <Link
        to={`/country/${name}/${cca3}`}
        aria-label={`View details about ${name}`}
      >
        <img
          src={svg}
          alt={alt ? alt : `The flag of ${name}.`}
          width="300px"
          height="200px"
        />
        <h2>{name}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital[0]}</p>
      </Link>
    </li>
  );
}

export default CountryCard;
