import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const H1 = styled.h1``;

export default function Header({ children }) {
  return <H1> {children}</H1>;
}

Header.propTypes = {
  children: PropTypes.string,
};
