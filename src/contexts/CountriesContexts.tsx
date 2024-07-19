import { createContext, useEffect, useState, ReactNode } from "react";
import { Country } from "../types";

/* https://restcountries.com/v3.1/{service}?fields={field},{field},{field}
https://restcountries.com/v3.1/all?fields=name,capital,currencies */
const BASE_URL = "https://restcountries.com/v3.1/all";

interface CountriesProviderProps {
  children: ReactNode;
}

interface CountriesContextType {
  countries: Country[];
}

const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

//custom Provider component
function CountriesProvider({ children }: CountriesProviderProps) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(function () {
    async function getCountries() {
      try {
        const res = await fetch(
          `${BASE_URL}?fields=name,capital,population,flags`
        );
        const data: Country[] = await res.json();

        //Manually validate data to ensure it matches expected format
        const validatedData: Country[] = data.map(
          (item: Country): Country => ({
            name: {
              common: item.name.common,
            },
            capital: item.capital,
            population: item.population,
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

  console.log("checked ", countries);

  return (
    <CountriesContext.Provider value={{ countries }}>
      {children}
    </CountriesContext.Provider>
  );
}

export { CountriesProvider, CountriesContext };
export type { CountriesContextType };
