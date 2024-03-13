import React from 'react';
import {
  ContainerCard,
  HeartBlueSvg,
  HeartWhiteSvg,
  ImgCar,
  AboutCarParagr,
  Separator,
  ModelCarSpan,
  RentalPriceSpan,
  AboutCarSpan,
  AddresParagr,
  LearnMoreBtn,
  HeartBtn,
} from './Card.styled';
import { limitLengthModel, parseAddress } from 'services/parseDataCard';

const Card = ({ car, handleToggle, handlerLearnMore }) => {
  const {
    id,
    isFavorite,
    img,
    model,
    type,
    make,
    rentalPrice,
    address,
    rentalCompany,
    year,
    engineSize,
  } = car;
  //витягуємо з рядка адреси країну та місто
  const objAddress = parseAddress(address);
  //щоб не ломався рядок опису авто, лімітуємо сумарну довжину виробник + модель
  const typeModel = limitLengthModel(model, make);
  return (
    <ContainerCard key={id}>
      {isFavorite ? (
        <HeartBtn type="button" onClick={() => handleToggle(id)}>
          <HeartBlueSvg />
        </HeartBtn>
      ) : (
        <HeartBtn type="button" onClick={() => handleToggle(id)}>
          <HeartWhiteSvg />
        </HeartBtn>
      )}

      <ImgCar src={img} alt={model} />

      <AboutCarParagr>
        <AboutCarSpan>
          {`${typeModel.make} `}
          <ModelCarSpan>{`${typeModel.model}`}</ModelCarSpan>
          {`, ${year}`}
        </AboutCarSpan>
        <RentalPriceSpan>{`${rentalPrice}`}</RentalPriceSpan>
      </AboutCarParagr>
      <AddresParagr>
        {` ${objAddress.city} `}
        <Separator />
        {` ${objAddress.country} `}
        <Separator />
        {` ${rentalCompany} `}
        <Separator />
      </AddresParagr>
      <AddresParagr>
        {` ${type} `}
        <Separator />
        {` ${model} `}
        <Separator />
        {` ${id} `}
        <Separator />
        {` ${engineSize} `}
      </AddresParagr>

      <LearnMoreBtn
        onClick={() => {
          handlerLearnMore(id);
        }}
      >
        Learn More
      </LearnMoreBtn>
    </ContainerCard>
  );
};

export default Card;
