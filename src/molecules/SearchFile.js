import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchIcon from '../atoms/searchComponents/SearchIcon';
import ClearButton from '../atoms/searchComponents/ClearButton';
import Input from '../atoms/searchComponents/Input';

const Search = styled.main`
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 1px solid #8a8a8a;
  border-radius: 5px;
  width: 80vw;
  max-width: 500px;
  padding: 5px;
`;

export default function SearchFile({ search, handleSearch }) {
  return (
    <Search>
      <SearchIcon />
      <Input search={search} handleSearch={handleSearch} />
      <ClearButton />
    </Search>
  );
}

SearchFile.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
};
