import React, {useState, useEffect, useCallback} from 'react';
import axios, {AxiosResponse} from 'axios';
import type {Country} from '../../types';

interface Props {
  onSelectCountry: React.MouseEventHandler;
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
    void  fetchCountries();
  }, [fetchCountries]);

  return (
    <div>
      <h2>Countries:</h2>
      <ul className="list-group col-2">
        {countries.map((country) => (
          <li className="list-group-item" key={country.alpha3Code} onClick={onSelectCountry}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
