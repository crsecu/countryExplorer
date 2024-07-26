import { createContext, useEffect, useState, ReactNode } from "react";
import { Country, CountryDetails } from "../types";
import { Dispatch, SetStateAction } from "react";

const BASE_URL = "https://restcountries.com/v3.1";

interface CountriesProviderProps {
  children: ReactNode;
}

interface CountriesContextType {
  countries: Country[];
  countryDetailsData: CountryDetails | null;
  getCountryDetails: (countryCode: string) => Promise<CountryDetails>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
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
  /* Functions that fetches data about every country in the world */
  useEffect(function () {
    async function getCountries() {
      try {
        const res = await fetch(
          `${BASE_URL}/all?fields=name,capital,population,flags,region,borders,cca3`
        );
        const data: Country[] = await res.json();
        console.log("data", data);

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
        console.log("ERROR", err);
      }
    }

    getCountries();
  }, []);

  /* Function that fetches Country Details Data */
  async function getCountryDetails(countryCode: string) {
    setCountryDetailsData(null);
    setIsLoading(true);
    try {
      const res = await fetch(
        `${BASE_URL}/alpha/${countryCode}?fields=name,capital,population,flags,borders,languages,currencies,tld,region,subregion,latlng`
      );
      const data = await res.json();
      setCountryDetailsData(data);
      console.log("DETAIL COUNTRY data", data);
      return data;
    } catch (err) {
      console.log("ERROR", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CountriesContext.Provider
      value={{
        countries,
        getCountryDetails,
        countryDetailsData,
        searchQuery,
        setSearchQuery,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export { CountriesProvider, CountriesContext };
export type { CountriesContextType };
