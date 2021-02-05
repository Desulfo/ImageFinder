import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../atoms/Header';
import SearchFile from '../molecules/SearchFile';

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
const ImageList = styled.ul`
  @media (min-width: 850px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`;

const Image = styled.img`
  margin: 5px;
  max-width: 100%;
  @media (min-width: 850px) {
  }
`;

export default function ResultPage({ search, results, handleSearch }) {
  console.log(results !== []);
  return (
    <ResultPageStyled>
      <SearchFile search={search} handleSearch={handleSearch} />
      <Header>{search}</Header>
      <ul>
        <li>'coś'</li>
      </ul>
      <ImageList>
        {results !== [] &&
          results.map((element) => (
            <li>
              <a>
                <Image src={element.urls.small} alt={element.alt_description} />
              </a>
            </li>
          ))}
      </ImageList>
    </ResultPageStyled>
  );
}

ResultPage.propTypes = {
  search: PropTypes.string,
  results: PropTypes.array,
  handleSearch: PropTypes.func,
};
