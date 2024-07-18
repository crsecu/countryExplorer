import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";

interface HomePageProps {}

function HomePage(props: HomePageProps): React.JSX.Element {
  const name = "United States";
  return (
    <>
      <Link to={`/country/${name}`}>
        <CountryCard />
      </Link>
    </>
  );
}

export default HomePage;
