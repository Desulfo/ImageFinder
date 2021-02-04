import React, { useState, useEffect } from 'react';

import SearchFile from '../molecules/SearchFile';
import Header from '../atoms/Header';
import HintsList from '../molecules/HintsList';

export default function LandingPage() {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState('');
  const hints = [];
  return (
    <main>
      <Header />
      <SearchFile />
      {hints.length > 0 && <HintsList hints={hints} />}
    </main>
  );
}
