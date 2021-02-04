import React from 'react';
import styled from 'styled-components';

const Loupe = styled.i`
  color: #a0a0a0;
  margin: 5px;
`;

export default function SearchIcon() {
  return <Loupe className="fas fa-search" />;
}
