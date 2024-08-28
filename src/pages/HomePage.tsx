import CountryCardList from "../components/CountryCardList/CountryCardList";
import FilterDropDown from "../components/FilterDropDown/FilterDropDown";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from "./HomePage.module.css";

function HomePage(): React.JSX.Element {
  return (
    <main className={styles.main}>
      <form className={styles.searchAndFilter_form}>
        <SearchBar />
        <FilterDropDown />
      </form>
      <CountryCardList />
    </main>
  );
}

export default HomePage;
