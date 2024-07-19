// TO DO: Transfer all interfaces to this file

/* Interfaces for Country Card data*/
export interface Name {
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
  cca3: string;
}

/* Interfaces for Country Detail-related data*/

/* PROPS Interfaces */
export interface CountryCardProps {
  country: Country;
}
