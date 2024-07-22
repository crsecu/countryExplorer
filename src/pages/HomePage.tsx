import CountryCardList from "../components/CountryCardList";
import SearchBar from "../components/SearchBar";

interface HomePageProps {}

function HomePage(props: HomePageProps): React.JSX.Element {
  return (
    <>
      <SearchBar />
      <CountryCardList />
    </>
  );
}

export default HomePage;
