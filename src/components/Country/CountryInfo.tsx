import React from 'react';
import {Character} from '../../types';

interface Props {
  country: Character;
}

const CountryInfo: React.FC<Props> = ({country}) => {

  return (
    <div className="col-4">
      <h3>{country.name}</h3>
      <img src={country.flag} alt={`${country.name} flag`} style={{maxWidth: '100px'}}/>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>
        Borders with: {country.borders && country.borders.length > 0 ? country.borders.join(', ') : 'None'}
      </p>
    </div>
  );
};

export default CountryInfo;