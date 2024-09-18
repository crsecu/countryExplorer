import { Link } from "react-router-dom";
import { useCountries } from "../../hooks/useCountries";
import { Country } from "../../types";
import styles from "./Neighbor.module.css";

interface NeighborProps {
  neighbor: string;
}

function Neighbor({ neighbor }: NeighborProps): React.JSX.Element {
  const { countries } = useCountries();

  // Find neighboring country name based on cca3 country code
  const neighborData: Country[] = countries.filter((country) => {
    return country.cca3 === neighbor;
  });

  const neighborName: string = neighborData[0].name?.common;

  return (
    <li className={styles.neighbor}>
      <Link to={`/country/${neighborName}/${neighbor}`}>{neighborName}</Link>
    </li>
  );
}

export default Neighbor;
