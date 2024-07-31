import { useEffect } from "react";
import { useCountries } from "../hooks/useCountries";
import { useParams } from "react-router-dom";
import Button from "./Button";
import NeighboursList from "./NeighborsList";

function InformationSection(): React.JSX.Element {
  const { getCountryDetails, countryDetailsData, isLoading } = useCountries();
  // extract country code (cca3) from url params
  const { cca3: countryCode } = useParams();

  // This effect is needed to ensure data fetch happens whenever the route changes
  useEffect(
    function () {
      if (!countryCode) return;
      getCountryDetails(countryCode);
    },
    [countryCode] //revisit this - might need useCallback to prevent infinit re-rendering when getCountryDetails is added to dependency array
  );

  if (isLoading || !countryDetailsData)
    return <p>Loading Details about selected country...</p>;

  const {
    name,
    capital,
    borders,
    population,
    languages,
    currencies,
    flags,
    region,
    subregion,
    tld,
    latlng,
  } = countryDetailsData;

  const currency = Object.values(currencies)[0].name;
  const language = Object.values(languages)[0];
  const nativeName =
    Object.keys(name.nativeName).length > 0
      ? Object.values(name.nativeName)[0].official
      : "Unknown";

  return (
    <>
      <div className="infoSection">
        <Button>Back</Button>
        <h1>{name.common}</h1>
        <p>
          <span>Native Name: {nativeName}</span>
        </p>
        <p>
          <span>Population: {population}</span>
        </p>
        <p>
          <span>Region: {region}</span>
        </p>
        <p>
          <span>Sub Region: {subregion}</span>
        </p>
        <p>
          <span>Capital: {capital[0]}</span>
        </p>
        <p>
          <span>Top Level Domain: {tld[0]}</span>
        </p>
        <p>
          <span>Currencies: {currency}</span>
        </p>
        <p>
          <span>Languages: {language}</span>
        </p>
      </div>
      <div>
        <h2>Neighbors</h2>
        <NeighboursList borders={borders} />
      </div>
    </>
  );
}

export default InformationSection;
