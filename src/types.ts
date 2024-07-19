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
  capital: string[];
  population: number;
  flags: Flags;
}

/* Interfaces for Country Detail-related data*/
