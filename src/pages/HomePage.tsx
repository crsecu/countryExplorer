import CountryCardList from "../components/CountryCardList/CountryCardList";
import FilterDropDown from "../components/FilterDropDown/FilterDropDown";
import SearchBar from "../components/SearchBar/SearchBar";

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
