import CountryList from './components/Country/CountryList';

function App() {

  const onSelectCountry = () => {

  };

  return (
    <div className="row">
      <CountryList onSelectCountry={onSelectCountry}/>
    </div>

  );
}

export default App;
