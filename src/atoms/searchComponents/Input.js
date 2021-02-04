import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 80%;
  border: none;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;
export default function Input({ handleSearch }) {
  const handleClick = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e.target.value);
    }
  };
  // eslint-disable-next-line prettier/prettier
  return (
    <StyledInput
      type="text"
      placeholder="Search free hight-resolution photos"
      onKeyUp={(e) => handleClick(e)}
    />
  );
}

Input.propTypes = {
  handleSearch: PropTypes.func,
};
