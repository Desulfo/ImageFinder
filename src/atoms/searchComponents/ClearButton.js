import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: none;
`;

export default function ClearButton() {
  return <Button type="button">x</Button>;
}
