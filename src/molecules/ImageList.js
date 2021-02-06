import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from '../atoms/resultComponents/ListItem';

const ImageListStyled = styled.ul`
  @media (min-width: 850px) {
    display: flex;
    flex-flow: row wrap;
  }
`;

export default function ImageList({ results }) {
  return (
    <ImageListStyled>
      {results !== [] && results.map((result) => <ListItem element={result} key={result.id} />)}
    </ImageListStyled>
  );
}

ImageList.propTypes = {
  results: PropTypes.array,
};
