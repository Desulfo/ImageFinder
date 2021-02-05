import React, { useState, useEffect } from 'react';
import LandingPage from '../templates/LandingPage';
import ResultPage from '../templates/ResultPage';

const collectionAPI = `https://api.unsplash.com/search/photos?query=`;

export default function App() {
  const [search, setSearch] = useState('island');
  const [results, setResults] = useState([]);
  const handleSearch = (value) => {
    setSearch(value);
  };
  useEffect(() => {
    fetch(collectionAPI + search, {
      method: 'GET',
      headers: {
        // eslint-disable-next-line prettier/prettier
        Authorization:
          'Client-ID 1ff567feea79565eafd82a37c3e34e5dacdbb411a117a9bec0bc20ffbd1a8612',
      },
    })
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  }, [search]);

  // eslint-disable-next-line prettier/prettier
  return (
    <ResultPage search={search} results={results} handleSearch={handleSearch} />
  );
}
