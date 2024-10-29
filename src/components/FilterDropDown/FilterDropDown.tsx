import Select, { InputProps, SingleValue, components } from "react-select";
import { useCountries } from "../../hooks/useCountries";

// TO DO: analyze and fix onChange type that TS complains about
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

const CustomInput = (props: InputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { "aria-describedby": _, ...rest } = props;
  return <components.Input {...rest} aria-labelledby="filterDropdownLabel" />;
};

function FilterDropdown(): React.JSX.Element {
  const { setFilterByRegion, setSearchQuery } = useCountries();

  function handleChange(selectedOption: SingleValue<SelectedOptions>): void {
    if (!selectedOption) {
      setFilterByRegion(""); //Handle the case when the selection is cleared
      return;
    }
    setFilterByRegion(selectedOption.label);
    setSearchQuery("");
  }

  return (
    <>
      <label className="sr-only" id="filterDropdownLabel">
        Filter country by region
      </label>
      <Select
        classNamePrefix="filter"
        options={options}
        onChange={handleChange}
        placeholder={"Filter by Region"}
        isClearable //This prop enables the selected option to be cleared. TO DO: Verify that the entire country list is displayed again after the option is cleared
        components={{ Input: CustomInput }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "6px",
            border: "none",
            outline: state.isFocused ? "3px solid" : "none",
            boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 8px 0px",
            padding: "8px 16px",
            cursor: "pointer",
          }),
          option: (baseStyle) => ({
            ...baseStyle,
            fontSize: "16px",
            color: "black",
            paddingLeft: "30px",
            fontWeight: 600,
            cursor: "pointer",
            backgroundColor: "unset",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            fontWeight: 600,
            fontSize: "16px",
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            display: state.selectProps.value ? "none" : "block",
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
          }),
        }}
      />
    </>
  );
}

export default FilterDropdown;
