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
    if (!selectedOption) {
      setFilterByRegion(""); //Handle the case when the selection is cleared
      return;
    }
    setFilterByRegion(selectedOption.label);
    setSearchQuery("");
  }

  return (
    <Select
      classNamePrefix="filter"
      options={options}
      onChange={handleChange}
      placeholder={"Filter by Region"}
      isClearable //This prop enables the selected option to be cleared. TO DO: Verify that the entire country list is displayed again after the option is cleared
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderRadius: "6px",
          border: state.isFocused ? "1px solid black " : "none",
          boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 8px 0px",
          padding: "8px 16px",
        }),
        option: (baseStyle) => ({
          ...baseStyle,
          fontSize: "16px",
          color: "black",
          paddingLeft: "30px",
          fontWeight: 600,
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: "black",
          fontWeight: 600,
          fontSize: "16px",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          display: state.selectProps.value ? "none" : "block",
          color: "black",
          marginLeft: "16px",
          fontSize: "10px",
          svg: {
            width: "18px",
          },
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          marginTop: "4px",
          boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 8px 0px",
          borderRadius: "6px",
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          fontSize: "16px",
          fontWeight: 600,
          color: "black",
        }),
      }}
    />
  );
}

export default FilterDropDown;
