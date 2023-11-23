import React, {useState, useEffect, useCallback} from 'react';
import axios, {AxiosResponse} from 'axios';
import type {Country} from '../../types';

interface Props {
  onSelectCountry: (countryCode: string) => void;
}

const CountryList: React.FC<Props> = ({onSelectCountry}) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const fetchCountries = useCallback(async () => {
    try {
      const response: AxiosResponse<Country[]> = await axios.get('v2/all?fields=alpha3Code,name');
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }, []);

  useEffect(() => {
    void fetchCountries();
  }, [fetchCountries]);

  return (
    <div className="col-3 me-3">
      <h2>Countries:</h2>
      <ul className="list-group">
        {countries.map((country) => (
          <li
            className="list-group-item"
            key={country.alpha3Code}
            onClick={() => onSelectCountry(country.alpha3Code)}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
