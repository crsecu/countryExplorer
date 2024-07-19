import { useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContexts";

//Custom hook that consumes CountriesContext
function useCountries() {
  //Here we pass in the context from which we want to read the data
  const countriesContextValue = useContext(CountriesContext);

  if (countriesContextValue === undefined)
    throw new Error("CountriesContext was used outside the CountriesProvider");

  return countriesContextValue;
}

export { useCountries };
