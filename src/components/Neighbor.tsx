import { useNavigate } from "react-router-dom";
import { useCountries } from "../hooks/useCountries";

// TO DO: Navigation to Neighbor Detail is not ideal - must be refactored

interface NeighborProps {
  neighbor: string;
}

function Neighbor({ neighbor }: NeighborProps): React.JSX.Element {
  const { getCountryDetails } = useCountries();
  const navigate = useNavigate();

  async function handleNeighborClick() {
    try {
      console.log("Neighbor button clicked");
      const neighborData = await getCountryDetails(neighbor);
      navigate(`/country/${neighbor}/${neighborData.name.common}`);
    } catch (err) {
      console.log("Failed to fetch neighbor details.", err);
    }
  }

  return (
    <li>
      <button onClick={handleNeighborClick}>{neighbor}</button>
    </li>
  );
}

export default Neighbor;
