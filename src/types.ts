// TO DO: Transfer all interfaces to this file

/* Interfaces for Country Card data*/

export interface Name {
  nativeName: {
    [key: string]: NativeName;
  };
  common: string;
}

export interface Flags {
  svg: string;
  alt: string;
}

export interface Country {
  name: Name;
  flags: Flags;
  capital: string[];
  population: number;
  region: string;
  borders: string[];
  cca3: string;
}

/* Interfaces for Country Detail-related data*/
export interface NativeName {
  official: string;
  common: string;
}
export interface CurrencyInfo {
  name: string;
  symbol: string;
}

export interface Languages {
  [key: string]: string;
}

export interface CountryDetails {
  name: Name;
  flags: Flags;
  languages: Languages;
  currencies: {
    [key: string]: CurrencyInfo;
  };
  capital: string[];
  population: number;
  region: string;
  subregion: string;
  borders: string[];
  tld: string[];
}

/* PROPS Interfaces */
export interface CountryCardProps {
  country: Country;
}
