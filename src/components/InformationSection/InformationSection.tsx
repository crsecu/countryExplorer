import { useEffect } from "react";
import { useCountries } from "../../hooks/useCountries";
import { useParams } from "react-router-dom";
import NeighboursList from "../NeighborsList/NeighborsList";
import styles from "./InformationSection.module.css";

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
    [countryCode, getCountryDetails] //revisit this - might need useCallback to prevent infinit re-rendering when getCountryDetails is added to dependency array
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
          <dd>{region}</dd>
        </dl>
        <dl>
          <dt>Sub Region</dt>
          <dd>{subregion}</dd>
        </dl>
        <dl>
          <dt>Capital</dt>
          <dd>{capital[0]}</dd>
        </dl>
        <br></br>
        <dl>
          <dt>Top Level Domain</dt>
          <dd>{tld[0]}</dd>
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
