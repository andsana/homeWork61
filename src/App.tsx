import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import CountryList from './components/Country/CountryList';
import CountryInfo from './components/Country/CountryInfo';
import Loader from './components/Loader/Loader';
import {Character} from './types';


function App() {
  const [selectedCountry, setSelectedCountry] = useState<Character | null>(null);
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchCountry = useCallback(async () => {
    if (!countryCode) {
      return;
    }
    try {
      setIsLoading(false);
      const response = await axios.get<Character>(`v2/alpha/${countryCode}`);
      const countryData: Character = response.data;
      setSelectedCountry(countryData);

    } catch (error) {
      console.error(`Error fetching country with code ${countryCode}:`, error);
      setIsLoading(false);
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
      {isLoading ? <Loader /> : selectedCountry && <CountryInfo country={selectedCountry} />}
    </div>
  );
}

export default App;
