import { useState, useEffect } from "react";
import { useCountries } from "../../hooks/useCountries";
import { useParams } from "react-router-dom";
import { objectIsEmpty } from "../../utils/objectIsEmpty";
import NeighboursList from "../NeighborsList/NeighborsList";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import Button from "../Button/Button";
import styles from "./InformationSection.module.css";

const BASE_URL = "https://restcountries.com/v3.1";

function InformationSection(): React.JSX.Element {
  const {
    countryDetailsData,
    setCountryDetailsData,
    setIsLoading,
    error,
    setError,
  } = useCountries();

  // extract country code (cca3) from url params
  const { cca3: countryCode } = useParams();

  // Local loading state is needed to prevent stale data from being rendered before the effect runs
  const [isFetchingCountryDetails, setIsFetchingCountryDetails] =
    useState<boolean>(true);

  // This effect is needed to ensure data fetch happens whenever the route changes
  useEffect(
    function () {
      if (!countryCode) return;

      /* Function that fetches Country Details Data */
      async function getCountryDetails(countryCode: string) {
        /* Prevent API calls when currently selected country === previously selected country */
        if (countryCode === countryDetailsData?.cca3) {
          setIsFetchingCountryDetails(false);
          return;
        }
        setIsLoading(true);
        setError("");
        try {
          const res = await fetch(
            `${BASE_URL}/alpha/${countryCode}?fields=name,capital,population,flags,borders,languages,currencies,tld,region,subregion,latlng,cca3`
          );
          console.log("API RESPONSE", res);
          if (!res.ok)
            throw new Error(
              "We encountered an issue while loading the country details. You can return to the home page to explore other countries."
            );
          const data = await res.json();
          setCountryDetailsData(data);
        } catch (err) {
          if (err instanceof Error) {
            console.log("ERROR in DETAIL PAGE", err);
            setError(err.message);
          }
        } finally {
          setIsFetchingCountryDetails(false);
          setIsLoading(false);
        }
      }

      getCountryDetails(countryCode);
    },
    [
      countryCode,
      countryDetailsData?.cca3,
      setCountryDetailsData,
      setError,
      setIsLoading,
    ]
  );

  if (isFetchingCountryDetails)
    return (
      <StatusIndicator
        img={""}
        suggestion={"Please wait"}
        className="statusIndicatorGlobal"
        spinner={true}
      >
        Loading...
      </StatusIndicator>
    );

  if (error || !countryDetailsData) {
    return (
      <StatusIndicator
        className="statusIndicatorGlobal"
        overlay={true}
        buttonComponent={Button}
        buttonName="Back to Home"
        stateSetter={setError}
      >
        {error}
      </StatusIndicator>
    );
  }

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

  const currency = objectIsEmpty(currencies)
    ? "No data available"
    : Object.values(currencies)[0].name;

  const language = objectIsEmpty(languages)
    ? "No data available"
    : Object.values(languages)[0];

  const nativeName = objectIsEmpty(name.nativeName)
    ? "No data available"
    : Object.values(name.nativeName)[0].official;

  return (
    <>
      <div className={styles.infoSection}>
        <div className={styles.detailContainer}>
          {/* temporary class name */}
          <h2 className={styles.countryName}>{name.common}</h2>
          <img
            src={flags.svg}
            alt={flags.alt ? flags.alt : `The flag of ${name}.`}
            className={styles.flagThumbnail}
          />
        </div>
        <dl>
          <dt>Native Name</dt>
          <dd>{nativeName}</dd>
        </dl>
        <dl>
          <dt>Population</dt>
          <dd>{population.toLocaleString()}</dd>
        </dl>
        <dl>
          <dt>Region</dt>
          <dd>{region ? region : "No data available"}</dd>
        </dl>
        <dl>
          <dt>Sub Region</dt>
          <dd>{subregion ? subregion : "No data available"}</dd>
        </dl>
        <dl>
          <dt>Capital</dt>
          <dd>{capital.length ? capital[0] : "No data available"}</dd>
        </dl>
        <br></br>
        <dl>
          <dt>Top Level Domain</dt>
          <dd>{tld.length ? tld[0] : "No data available"}</dd>
        </dl>
        <dl>
          <dt>Currencies</dt>
          <dd> {currency}</dd>
        </dl>
        <dl>
          <dt>Languages</dt>
          <dd> {language}</dd>
        </dl>

        <div className={styles.neighborsListSection}>
          {borders.length > 0 && (
            <>
              <h3>Border Countries:</h3>
              <NeighboursList borders={borders} />{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default InformationSection;
