/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import SearchFile from '../molecules/SearchFile';
import Header from '../atoms/Header';
import HintsList from '../molecules/HintsList';

export default function LandingPage() {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState('');
  const hints = ['las'];

  const handleSearch = (value) => {
    setSearch(value);
  };
  return (
    <main>
      <Header>Unsplash</Header>
      <SearchFile handleSearch={handleSearch} />
      {hints.length > 0 && (
        <HintsList hints={hints} handleSearch={handleSearch} />
      )}
    </main>
  );
}
