import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Hint from '../atoms/Hint';

const Ul = styled.ul`
  margin: 5px auto;
  width: 80vw;
  max-width: 500px;
  border: 1px solid #8a8a8a;
  border-radius: 5px;
`;

export default function HintsList({ hints, handleSearch }) {
  return (
    <Ul>
      {hints.map((hint) => (
        <Hint hint={hint} key={hint} handleSearch={handleSearch} />
      ))}
    </Ul>
  );
}

HintsList.propTypes = {
  hints: PropTypes.arrayOf(PropTypes.string),
  handleSearch: PropTypes.func,
};
