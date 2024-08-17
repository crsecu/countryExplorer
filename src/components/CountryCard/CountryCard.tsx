import { Link } from "react-router-dom";
import { CountryCardProps } from "../../types";
import { useCountries } from "../../hooks/useCountries";
import styles from "./CountryCard.module.css";

function CountryCard({ country }: CountryCardProps): React.JSX.Element {
  const { setSearchQuery, setFilterByRegion } = useCountries();

  const {
    capital,
    flags: { svg, alt },
    name: { common: name }, // Destructure nested 'common' property and rename to 'name'
    population,
    region,
    cca3,
  } = country;

  /* Reset search query and filter to default values when a country card is clicked */
  function clearSearchAndFilter() {
    setSearchQuery("");
    setFilterByRegion("");
  }

  return (
    <li onClick={clearSearchAndFilter}>
      <article className={styles.countryCard}>
        <Link
          to={`/country/${name}/${cca3}`}
          aria-label={`View details about ${name}`}
        >
          <img
            src={svg}
            alt={alt ? alt : `The flag of ${name}.`}
            width="300px"
            height="180px"
            className={styles.flag}
          />

          <div className={styles.countryCardContent}>
            <h2>{name}</h2>
            <dl className={styles.countryCardInfo}>
              <div>
                <dt>Population</dt>
                <dd>{population}</dd>
              </div>
              <div>
                <dt>Region</dt>
                <dd>{region}</dd>
              </div>
              <div>
                <dt>Capital</dt>
                <dd>{capital[0]}</dd>
              </div>
            </dl>
          </div>
        </Link>
      </article>
    </li>
  );
}

export default CountryCard;