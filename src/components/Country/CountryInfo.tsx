import React from 'react';

interface Props {
  name: string;
  capital: string;
  population: number;
  flag: string;
  borders: string[];
}

const CountryInfo: React.FC<Props> = ({name, capital, population, flag, borders}) => {

  return (
    <div>
      <h3>{name}</h3>
      <img src={flag} alt={`${name} flag`} style={{ maxWidth: '100px' }} />
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Borders with: {borders.join(', ')}</p>
    </div>
  );
};

export default CountryInfo;