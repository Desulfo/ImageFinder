import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 80%;
  border: none;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

export default function Input() {
  // eslint-disable-next-line prettier/prettier
  return (
    <StyledInput
      type="text"
      placeholder="Search free hight-resolution photos"
    />
  );
}
