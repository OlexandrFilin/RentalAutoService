import React from 'react';
import {
  BackdropModal,
  ContainerModal,
  CrossCloseModal,
  ImgCar,
} from './modalAbout.styled';

const ModalAbout = ({ carCard, closeLearnMore }) => {
  console.log('caeCard', carCard)
  const { img, model } = carCard;
  return (
    <BackdropModal>
      <ContainerModal>
        <CrossCloseModal onClick={closeLearnMore}/>
        <ImgCar src={img} alt={model} />
      </ContainerModal>
    </BackdropModal>
  );
};

export default ModalAbout;
