import { useCountries } from "../hooks/useCountries";
import CountryCard from "./CountryCard";

/* TO DO: check if component is rendering twice */

interface CountryCardListProps {}

function CountryCardList(props: CountryCardListProps): React.JSX.Element {
  const { countries } = useCountries();

  return (
    <ul className="countriesList">
      {countries.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </ul>
  );
}

export default CountryCardList;
