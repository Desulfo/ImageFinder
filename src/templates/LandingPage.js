import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchFile from '../molecules/SearchFile';
import Header from '../atoms/Header';
// import HintsList from '../molecules/HintsList';

export default function LandingPage({ handleSearch }) {
  // const [hints, setHints] = useState(['las']);

  return (
    <main>
      <Header>Unsplash</Header>
      <SearchFile handleSearch={handleSearch} />
      {/* hints.length > 0 && <HintsList hints={hints} handleSearch={handleSearch} /> */}
    </main>
  );
}

LandingPage.propTypes = {
  handleSearch: PropTypes.func,
};
