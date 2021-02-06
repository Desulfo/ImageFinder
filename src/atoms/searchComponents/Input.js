import React, { useState } from 'react';
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
export default function Input({ search, handleSearch }) {
  const [value, setValue] = useState(search);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e.target.value);
    }
  };
  return (
    <StyledInput
      type="text"
      placeholder="Search free hight-resolution photos"
      onKeyUp={(e) => handleClick(e)}
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
}

Input.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
};
