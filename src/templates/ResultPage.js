import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../atoms/Header';
import SearchFile from '../molecules/SearchFile';
import ImageList from '../molecules/ImageList';

const ResultPageStyled = styled.main`
  margin: 0 auto;
  padding: 20px;
  max-width: 500px;
  @media (min-width: 950px) {
    max-width: 860px;
    text-align: left;
  }
  @media (min-width: 1450px) {
    max-width: 1270px;
  }
`;

export default function ResultPage({ search, results, handleSearch }) {
  return (
    <ResultPageStyled>
      <SearchFile search={search} handleSearch={handleSearch} />
      <Header>{search}</Header>
      {results && <ImageList results={results} />}
    </ResultPageStyled>
  );
}

ResultPage.propTypes = {
  search: PropTypes.string,
  results: PropTypes.array,
  handleSearch: PropTypes.func,
};
