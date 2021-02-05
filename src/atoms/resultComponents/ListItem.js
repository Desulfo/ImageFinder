import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  margin: 5px;
  max-width: 100%;
  @media (min-width: 850px) {
  }
`;

export default function ListItem({ element }) {
  return (
    <li>
      <a>
        <Image src={element.urls.small} alt={element.alt_description} />
      </a>
    </li>
  );
}

ListItem.propTypes = {
  element: PropTypes.array,
};
