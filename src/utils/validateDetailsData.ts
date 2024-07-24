import { CountryDetails } from "../types";

/* Function that validates Country Detail Data returned from API */
/* Not using it for now - revisit later */
function validateDetailData(data): CountryDetails {
  return {
    name: {
      common: data?.name?.common || "Unknown",
      nativeName: data?.name?.nativeName || {},
      // nativeName: data.name.nativeName &&
    },
    flags: {
      svg: data?.flags?.svg || "",
      alt: data?.flags?.alt || "No description available",
    },
    capital:
      data.capital && data.capital.length > 0 ? data.capital : ["Unknown"],
    population: data.population || 0,
    region: data.region || "Unknown",
    borders: data.borders || [],
    cca3: data.cca3 || "Unknown",
    languages: data.languages || {},
    currencies:
      data.currencies && Object.keys(data.currencies).length > 0
        ? data.currencies
        : { "": { name: "No data available", symbol: "No data available" } },
    subregion: data.subregion || "Unknown 2",
    tld: data.tld || ["Unknown"],
    latlng: (data.latlng && data.latlng.length === 2
      ? data.latlng
      : [0, 0]) as [number, number],
  };
}
