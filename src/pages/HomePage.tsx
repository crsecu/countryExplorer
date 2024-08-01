import CountryCardList from "../components/CountryCardList";
import FilterDropDown from "../components/FilterDropDown";
import SearchBar from "../components/SearchBar";

interface HomePageProps {}

function HomePage(props: HomePageProps): React.JSX.Element {
  return (
    <>
      <div className="filter">
        <SearchBar />
        <FilterDropDown />
      </div>

      <CountryCardList />
    </>
  );
}

export default HomePage;
