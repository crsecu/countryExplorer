import { useCountries } from "../../hooks/useCountries";
import CountryCard from "../CountryCard/CountryCard";

/* TO DO: check if component is rendering twice */

function CountryCardList(): React.JSX.Element {
  const { filteredCountries, isLoading } = useCountries();

  if (isLoading) return <h1>Fetching Countries from API</h1>;

  return (
    <ul className="countriesList">
      {filteredCountries.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </ul>
  );
}

export default CountryCardList;
