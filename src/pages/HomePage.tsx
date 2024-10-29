import CountryCardList from "../components/CountryCardList/CountryCardList";
import FilterDropdown from "../components/FilterDropdown/FilterDropdown";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from "./HomePage.module.css";

function HomePage(): React.JSX.Element {
  return (
    <main className={styles.main}>
      <form className={styles.searchAndFilter_form}>
        <SearchBar />
        <FilterDropdown />
      </form>
      <CountryCardList />
    </main>
  );
}

export default HomePage;
