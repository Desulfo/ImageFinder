import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: inherit;
  border: none;
  width: 100%;
  padding: 10px 0 10px 10px;
  text-align: left;
  &:hover {
    background-color: #eee;
  }
`;

export default function Hint({ hint }) {
  return (
    <li>
      <Button type="button">{hint}</Button>
    </li>
  );
}

Hint.propTypes = {
  hint: PropTypes.string,
};
