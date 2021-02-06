import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
  },
};
const Header = styled.h2`
  text-align: left;
`;
const Image = styled.img`
  max-width: 80vw;
  max-height: 80vh;
`;
const photoAPI = `https://api.unsplash.com/photos/`;

export default function StyledModal({ closeModal, modalIsOpen, element }) {
  const [location, setLocation] = useState('');
  if (modalIsOpen) {
    fetch(photoAPI + element.id, {
      method: 'GET',
      headers: {
        Authorization: 'Client-ID 1ff567feea79565eafd82a37c3e34e5dacdbb411a117a9bec0bc20ffbd1a8612',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLocation(data.location.name);
      });
  }
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <Header>{element.user.name}</Header>
      <Image src={element.urls.full} alt={element.alt_description} />
      <p>{location || 'no location'}</p>
      <button type="button" onClick={closeModal}>
        X
      </button>
    </Modal>
  );
}

StyledModal.propTypes = {
  closeModal: PropTypes.func,
  modalIsOpen: PropTypes.bool,
  element: PropTypes.object,
};
