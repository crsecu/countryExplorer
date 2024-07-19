import CountryCard from "../components/CountryCard";
import { useCountries } from "../hooks/useCountries";

interface HomePageProps {}

function HomePage(props: HomePageProps): React.JSX.Element {
  const { countries } = useCountries();
  // console.log("countries ", countries);

  return (
    <>
      <CountryCard />
    </>
  );
}

export default HomePage;
