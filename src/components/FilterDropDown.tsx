import Select, { SingleValue } from "react-select";
import { useCountries } from "../hooks/useCountries";
import { useState } from "react";

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
  const { countries } = useCountries();
  const [selected, setSelected] = useState<string | null>(null);

  function handleChange(selectedOption: SingleValue<SelectedOptions>) {
    if (!selectedOption) return;
    setSelected(selectedOption.label);
  }

  const selectedRegion = countries.filter((country) => {
    return country.region === selected;
  });

  console.log(selectedRegion);
  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder={"Filter by region"}
    />
  );
}

export default FilterDropDown;
