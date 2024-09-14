import { useCountries } from "../../hooks/useCountries";
import CountryCard from "../CountryCard/CountryCard";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import noResultsImage from "../../assets/icons/no-results.png";
import styles from "./CountryCardList.module.css";

/* TO DO: check if component is rendering twice */

function CountryCardList(): React.JSX.Element {
  const { filteredCountries, isLoading, searchQuery } = useCountries();
  console.log("this are the countries", searchQuery);

  if (isLoading)
    return (
      <StatusIndicator img={""} suggestion={""}>
        Fetching Countries from API
      </StatusIndicator>
    );
  if (filteredCountries.length === 0)
    return (
      <StatusIndicator img={noResultsImage} suggestion="Try another name.">
        No results found for "{searchQuery}"
      </StatusIndicator>
    );

  return (
    <ul className={styles.countryCardList}>
      {filteredCountries.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </ul>
  );
}

export default CountryCardList;
