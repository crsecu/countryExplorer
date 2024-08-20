import Neighbor from "../Neighbor/Neighbor";
import styles from "./NeighborsList.module.css";

interface NeighborsListProps {
  borders: string[];
}

function NeighborsList({ borders }: NeighborsListProps): React.JSX.Element {
  return (
    <ul className={styles.neighborsList}>
      {borders.map((border) => (
        <Neighbor neighbor={border} key={border} />
      ))}
    </ul>
  );
}

export default NeighborsList;
