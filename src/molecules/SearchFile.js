import React from 'react';

import SearchIcon from '../atoms/searchComponents/SearchIcon';
import ClearButton from '../atoms/searchComponents/ClearButton';
import Input from '../atoms/searchComponents/Input';

export default function SearchFile() {
  return (
    <main>
      <SearchIcon />
      <Input />
      <ClearButton />
    </main>
  );
}
