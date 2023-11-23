import CountryList from './components/Country/CountryList';
import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {Character} from './types';
import CountryInfo from './components/Country/CountryInfo';

function App() {
  const [selectedCountry, setSelectedCountry] = useState<Character | null>(null);
  const [countryCode, setCountryCode] = useState<string | null>(null);

  const fetchCountry = useCallback(async () => {
    if (!countryCode) {
      return;
    }
    try {
      const response = await axios.get<Character>(`v2/alpha/${countryCode}`);
      const countryData: Character = response.data;
      setSelectedCountry(countryData);

    } catch (error) {
      console.error(`Error fetching country with code ${countryCode}:`, error);
    }
  }, [countryCode]);

  useEffect(() => {
    void fetchCountry();
  }, [fetchCountry]);

  const getCountry = (countryCode: string) => {
    setCountryCode(countryCode);
    console.log(`Выбрана страна ${countryCode}`);
  };

  console.log(selectedCountry);

  return (
    <div className="container p-3 row">
      <CountryList
        onSelectCountry={getCountry}/>

      {selectedCountry
        ? (<CountryInfo country={selectedCountry}/>)
        : (<p>Select a country</p>)
      }
    </div>
  );
}

export default App;
