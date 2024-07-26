import Neighbor from "./Neighbor";

interface NeighborsListProps {
  borders: string[];
}

function NeighborsList({ borders }: NeighborsListProps): React.JSX.Element {
  return (
    <ul>
      {borders.map((border) => (
        <Neighbor neighbor={border} key={border} />
      ))}
    </ul>
  );
}

export default NeighborsList;
