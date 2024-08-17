import { useCountries } from "../../hooks/useCountries";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-outline.svg";

function SearchBar(): React.JSX.Element {
  const { searchQuery, setSearchQuery } = useCountries();

  return (
    <div className={styles.searchContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchBar}
      ></input>
    </div>
  );
}

export default SearchBar;
