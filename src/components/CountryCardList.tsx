import { useCountries } from "../hooks/useCountries";
import CountryCard from "./CountryCard";

/* TO DO: check if component is rendering twice */

function CountryCardList(): React.JSX.Element {
  const { filteredCountries } = useCountries();

  return (
    <ul className="countriesList">
      {filteredCountries.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </ul>
  );
}

export default CountryCardList;
