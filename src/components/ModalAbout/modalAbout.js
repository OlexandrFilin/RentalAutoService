import React, { useEffect } from 'react';
import {
  BackdropModal,
  ContainerModal,
  CrossCloseModal,
  ImgCar,
} from './modalAbout.styled';

import AboutCar from './AboutCar/aboutCar';

const ModalAbout = ({ carCard, closeLearnMore }) => {
  const { img, model } = carCard;
  useEffect(() => {
    window.addEventListener('keydown', handleCloseEscape);
  });
  useEffect(() => {
    return () => {

      window.removeEventListener('keydown', handleCloseEscape);
    };
  });

  const handleCloseEscape = e => {
    if (e.code === 'Escape') closeLearnMore();
  };
  return (
    <BackdropModal onClick={closeLearnMore} >
      <ContainerModal>
        <CrossCloseModal onClick={closeLearnMore} />
        <ImgCar src={img} alt={model} />
        <AboutCar carCard={carCard} />
      </ContainerModal>
    </BackdropModal>
  );
};

export default ModalAbout;
