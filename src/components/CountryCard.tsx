import { useNavigate } from "react-router-dom";
import { CountryCardProps } from "../types";

function CountryCard({ country }: CountryCardProps): React.JSX.Element {
  const navigate = useNavigate();

  const {
    capital,
    flags: { svg, alt },
    name: { common: name }, // Destructure nested 'common' property and rename to 'name'
    population,
    region,
    cca3,
  } = country;

  function handleClick(code: string, countryname: string) {
    console.log("Card Clicked");
    navigate(`/country/${code}/${countryname}`);
  }

  return (
    <li>
      <a
        tabIndex={0}
        aria-label={`View details about ${name}`}
        onClick={() => handleClick(cca3, name)}
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
      </a>
    </li>
  );
}

export default CountryCard;
