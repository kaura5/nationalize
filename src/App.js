import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './Header.js';
import Cards from './Cards.js';

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [country, setCountry] = useState([]);
  // const country = getName('IN');
  console.log(country);

  useEffect(() => {
    if (searchValue) {
      doFetch(searchValue)
        .then((country) => setCountry(country))
        .catch(console.log);
    }
  }, [searchValue]);

  async function doFetch(searchValue) {
    const response = await fetch(`https://api.nationalize.io/?name=${searchValue}`);
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  }

  function SearchValue(ev) {
    ev.preventDefault();
    console.log(ev);
    setSearchValue(ev.target[0].value);
  }
  return (
    <div className="App">
      <Header />
      <form className="inputForm" onSubmit={SearchValue}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <Cards country={country} />
    </div>
  );
}

export default App;
