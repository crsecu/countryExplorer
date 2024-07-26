// TO DO: Transfer all interfaces to this file

/* Interfaces for Country Card data*/

export interface Name {
  nativeName: {
    [key: string]: NativeName;
  };
  official: string;
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

export interface CountryDetails extends Country {
  languages: Languages;
  currencies: {
    [key: string]: CurrencyInfo;
  };
  subregion: string;
  borders: string[];
  tld: string[];
  latlng: [number, number];
}

/* PROPS Interfaces */
export interface CountryCardProps {
  country: Country;
}

export interface ChangeCenterProps {
  position: [number, number];
}
