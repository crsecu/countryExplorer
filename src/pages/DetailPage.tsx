import { useEffect } from "react";
import { useCountries } from "../hooks/useCountries";
import { useParams } from "react-router-dom";

function DetailPage(): React.JSX.Element {
  // extract country code (cca3) from url params
  const { getCountryDetails, countryDetailsData } = useCountries();
  const { cca3: countryCode } = useParams();

  useEffect(
    function () {
      if (!countryCode) return;

      getCountryDetails(countryCode);
    },
    [countryCode] //revisit this - might need useCallback to prevent infinit re-rendering when getCountryDetails is added to dependency array
  );

  if (!countryDetailsData) return <p>Loading...</p>;

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
  } = countryDetailsData;

  const currency = Object.values(currencies)[0].name;
  const language = Object.values(languages)[0];
  const nativeName = Object.values(name.nativeName)[0].official;
  console.log(nativeName);

  return (
    <>
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
    </>
  );
}

export default DetailPage;
