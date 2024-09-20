import { useCountries } from "../../hooks/useCountries";
import CountryCard from "../CountryCard/CountryCard";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import noResultsImage from "../../assets/icons/no-results.png";
import styles from "./CountryCardList.module.css";
import Button from "../Button/Button";

/* TO DO: check if component is rendering twice */

function CountryCardList(): React.JSX.Element {
  const {
    filteredCountries,
    countries,
    isLoading,
    searchQuery,
    error,
    setError,
    getCountries,
  } = useCountries();

  if (isLoading)
    return (
      <StatusIndicator spinner={true} suggestion="Please wait">
        Fetching Countries from API...
      </StatusIndicator>
    );

  // TO DO: When button is clicked, a page refresh would be better than taking the user back to main page
  if (error && countries.length === 0) {
    return (
      <StatusIndicator
        buttonComponent={Button}
        stateSetter={setError}
        overlay={true}
        callbackFn={getCountries}
      >
        {error}
      </StatusIndicator>
    );
  }

  if (filteredCountries.length === 0 && countries.length > 0)
    return (
      <StatusIndicator
        img={noResultsImage}
        suggestion="Please try a different country name, or check if you have selected a region in the top-right corner (e.g., Europe) that may limit the results."
      >
        No results found for your query "{searchQuery}".
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
