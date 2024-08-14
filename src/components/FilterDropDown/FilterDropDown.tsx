import Select, { SingleValue } from "react-select";
import { useCountries } from "../../hooks/useCountries";

interface SelectedOptions {
  value: string;
  label: string;
}

const options: SelectedOptions[] = [
  { value: "Americas", label: "Americas" },
  { value: "Europe", label: "Europe" },
  { value: "Asia", label: "Asia" },
  { value: "Africa", label: "Africa" },
  { value: "Oceania", label: "Oceania" },
];

function FilterDropDown(): React.JSX.Element {
  const { setFilterByRegion, setSearchQuery } = useCountries();

  function handleChange(selectedOption: SingleValue<SelectedOptions>) {
    if (!selectedOption) return;
    setFilterByRegion(selectedOption.label);
    setSearchQuery("");
  }

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder={"Filter by region"}
    />
  );
}

export default FilterDropDown;
