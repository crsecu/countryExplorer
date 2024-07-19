import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { useCountries } from "../hooks/useCountries";

interface HomePageProps {}

function HomePage(props: HomePageProps): React.JSX.Element {
  const name = "United States";
  const { countries } = useCountries();
  // console.log("countries ", countries);

  return (
    <>
      <Link to={`/country/${name}`}>
        <CountryCard />
      </Link>
    </>
  );
}

export default HomePage;
