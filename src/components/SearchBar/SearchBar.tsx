import { useCountries } from "../../hooks/useCountries";

function SearchBar(): React.JSX.Element {
  const { searchQuery, setSearchQuery } = useCountries();

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    ></input>
  );
}

export default SearchBar;
