import { createContext, useEffect, useState, ReactNode } from "react";
import { Country, CountryDetails } from "../types";

const BASE_URL = "https://restcountries.com/v3.1";

interface CountriesProviderProps {
  children: ReactNode;
}

interface CountriesContextType {
  countries: Country[];
  countryDetailsData: CountryDetails | null;
  getCountryDetails: (countryCode: string) => Promise<void>;
}

const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

//custom Provider component
function CountriesProvider({ children }: CountriesProviderProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryDetailsData, setCountryDetailsData] =
    useState<CountryDetails | null>(null);

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
    try {
      const res = await fetch(
        `${BASE_URL}/alpha/${countryCode}?fields=name,capital,population,flags,borders,languages,currencies,tld,region,subregion`
      );
      const data = await res.json();
      setCountryDetailsData(data);
      console.log("DETAIL COUNTRY", data);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  return (
    <CountriesContext.Provider
      value={{ countries, getCountryDetails, countryDetailsData }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export { CountriesProvider, CountriesContext };
export type { CountriesContextType };
