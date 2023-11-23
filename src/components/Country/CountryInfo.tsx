import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { Character } from '../../types';

interface Props {
  country: Character;
}

const CountryInfo: React.FC<Props> = ({ country }) => {
  const [borderNames, setBorderNames] = useState<string[]>([]);

  const getBorderNames = useCallback(async () => {
    if (!country.borders) {
      return;
    }
    try {
      const bordersResponse: string[] = await Promise.all(
        country.borders.map(async (borderCode: string): Promise<string> => {
          const response = await axios.get(`v2/alpha/${borderCode}`);
          return response.data.name;
        })
      );
      setBorderNames(bordersResponse);
    } catch (error) {
      console.error('Error fetching border country names:', error);
    }
  }, [country.borders]);

  useEffect(() => {
    void getBorderNames();
  }, [country.borders, getBorderNames]);

  return (
    <div className="col-4 position-fixed start-50">
      <h3>{country.name}</h3>
      <img src={country.flag} alt={`${country.name} flag`} style={{ maxWidth: '100px', marginBottom: '20px', border: '1px solid black'}} />
      <p><strong>Capital: </strong>{country.capital}</p>
      <p><strong>Population: </strong>{country.population}</p>
      <p>
        <strong>Borders with: </strong>{borderNames && borderNames.length > 0 ? borderNames.join(', ') : 'None'}
      </p>
    </div>
  );
};

export default CountryInfo;


