import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Modal from '../../molecules/Modal';

const Image = styled.img`
  margin: 5px;
  max-width: 100%;
  cursor: zoom-in;
  @media (min-width: 850px) {
  }
`;

export default function ListItem({ element }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <li>
      <Modal closeModal={closeModal} modalIsOpen={modalIsOpen} element={element} />
      <Image src={element.urls.small} alt={element.alt_description} onClick={openModal} />
    </li>
  );
}

ListItem.propTypes = {
  element: PropTypes.object,
};
