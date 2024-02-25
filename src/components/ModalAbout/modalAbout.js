import React from 'react';
import {
  BackdropModal,
  ContainerModal,
  CrossCloseModal,
  ImgCar,
} from './modalAbout.styled';

import AboutCar from './AboutCar/aboutCar';

const ModalAbout = ({ carCard, closeLearnMore }) => {
  const { img, model } = carCard;

  return (
    <BackdropModal>
      <ContainerModal>
        <CrossCloseModal onClick={closeLearnMore} />
        <ImgCar src={img} alt={model} />
        <AboutCar carCard={carCard} />
      </ContainerModal>
    </BackdropModal>
  );
};

export default ModalAbout;
