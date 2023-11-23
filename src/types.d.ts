export interface Character {
  name: string;
  capital: string;
  population: number;
  flag: string;
  borders: string[];
}

export interface Country {
  alpha3Code: string;
  name: string;
}