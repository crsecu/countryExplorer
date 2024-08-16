import CountryCardList from "../components/CountryCardList/CountryCardList";
import FilterDropDown from "../components/FilterDropDown/FilterDropDown";
import SearchBar from "../components/SearchBar/SearchBar";

function HomePage(): React.JSX.Element {
  return (
    <main>
      <form className="filter">
        <SearchBar />
        <FilterDropDown />
      </form>
      <CountryCardList />
    </main>
  );
}

export default HomePage;
