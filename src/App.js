import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Content from './Components//content/Content';
import Filter from './Components/filter/Filter';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled');
        setAllCountries(response.data);
        setCountries(response.data)
        console.log(response.data);
      })
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    if (filter) {
      setCountries(
        allCountries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
      )
    } else {
      setCountries(allCountries)
    }
  }

  if (allCountries.length === 0) {
    return <div>Loading page...</div>
  } else {
    return (
      <div className="App">
        <Filter filter={filter} handleFilterChange={handleFilterChange}/>
        <Content filter={filter} countries={countries} setCountries={setCountries}/>
      </div>
    );
  }

  
}

export default App;
