import { createContext, useEffect, useState, ReactNode } from "react";
import { Country, CountryDetails } from "../types";
import { Dispatch, SetStateAction } from "react";

const BASE_URL = "https://restcountries.com/v3.1";

interface CountriesProviderProps {
  children: ReactNode;
}

interface CountriesContextType {
  countries: Country[];
  searchedCountries: Country[];
  countryDetailsData: CountryDetails | null;
  setCountryDetailsData: Dispatch<SetStateAction<CountryDetails | null>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  filteredCountries: Country[];
  setFilterByRegion: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
}

const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

//custom Provider component
function CountriesProvider({ children }: CountriesProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryDetailsData, setCountryDetailsData] =
    useState<CountryDetails | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterByRegion, setFilterByRegion] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  /* Filter countries based on search query */
  // TO DO: The sequence of searching/filtering might be incorrect - it might be better to filter and then search
  const searchedCountries =
    searchQuery.length > 2
      ? countries.filter((searchedCountry) =>
          searchedCountry.name.common
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : countries;

  /* Filter countries by region */
  const filteredCountries = filterByRegion
    ? searchedCountries.filter((country) => {
        return country.region === filterByRegion;
      })
    : searchedCountries;

  /* Functions that fetches data about every country in the world */
  useEffect(function () {
    async function getCountries() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/all?fields=name,capital,population,flags,region,borders,cca3`
        );
        console.log("res here", res);
        if (!res.ok)
          throw new Error(
            "Unable to load the list of countries. Please check your internet connection or try again later."
          );
        const data: Country[] = await res.json();

        //Manually validate data to ensure it matches expected format
        const validatedData: Country[] = data.map(
          (item: Country): Country => ({
            name: {
              common: item.name.common,
              official: item.name.official,
              nativeName: {},
            },
            capital: item.capital,
            population: item.population,
            region: item.region,
            cca3: item.cca3,
            borders: item.borders,
            flags: {
              svg: item.flags.svg,
              alt: item.flags.alt,
            },
          })
        );

        setCountries(validatedData);
      } catch (err) {
        if (err instanceof Error) {
          console.log("ERROR", err);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        searchedCountries,
        setCountryDetailsData,
        countryDetailsData,
        searchQuery,
        setSearchQuery,
        filteredCountries,
        setFilterByRegion,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export { CountriesProvider, CountriesContext };
export type { CountriesContextType };
