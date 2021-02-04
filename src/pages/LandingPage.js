/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import SearchFile from '../molecules/SearchFile';
import Header from '../atoms/Header';
import HintsList from '../molecules/HintsList';

const collectionAPI = `https://api.unsplash.com/search/collections?query=`;

export default function LandingPage() {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState('');
  const hints = ['las'];

  const handleSearch = (value) => {
    setSearch(value);
  };
  // useEffect(() => {
  //   console.log(search);
  //   fetch(collectionAPI + search, {
  //     method: 'GET',
  //     headers: {
  //       Authorization:
  //         'Client-ID 1ff567feea79565eafd82a37c3e34e5dacdbb411a117a9bec0bc20ffbd1a8612',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, [search]);
  return (
    <main>
      <Header />
      <SearchFile handleSearch={handleSearch} />
      {hints.length > 0 && (
        <HintsList hints={hints} handleSearch={handleSearch} />
      )}
    </main>
  );
}
