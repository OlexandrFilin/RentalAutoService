import React from 'react';
import {
  ContainerCard,
  HeartBlue,
  HeartWhite,
  ImgCar,
  AboutCarParagr,
  Separator,
  ModelCarSpan,
  RentalPriceSpan,
  AboutCarSpan,
  AddresParagr,
  LearnMoreBtn,
} from './Card.styled';

const Card = ({ car, handleToggle, hanlerLearnMore }) => {
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

  const parseAddress = addressString => {
    const arrayWords = addressString.split(',');
    if (arrayWords.length === 3) {
      return {
        country: arrayWords[arrayWords.length - 1],
        city: arrayWords[arrayWords.length - 2],
        street: arrayWords[arrayWords.length - 3],
      };
    }
    return {
      country: arrayWords[arrayWords.length - 1],
      city: 'XXXXX',
      street: 'XXXXX',
    };
  };
  const objAddress = parseAddress(address);
  //щоб не ломався рядок опису авто, лімітуємо сумарну довжину виробник + модель
  const limitLengthModel = (modelStr, makeStr) => {
    // console.log('modelStr ', modelStr)
    // console.log('modelStr.length ', modelStr.length )
    // console.log('makeStr ', makeStr)
    // console.log('makeStr.length',  makeStr.length)
    // console.log('model.length + makeStr.length', modelStr.length + makeStr.length)
    if ((modelStr.length + makeStr.length) < 19) {
       return {
        model,
        make,
      };
    } else if (modelStr.length < 16) {
      console.log('modelStr.length < 16', modelStr.length)

      return {
        model,
        make: makeStr.slice(0, 19 - modelStr.length),
      };
    } else {
      return {
        model,
        make:""
      };
    }
  };
   console.log('id', id)
  
  const typeModel = limitLengthModel(model,make);
 console.log('typeModel', typeModel)
  return (
    <ContainerCard key={id}>
      {isFavorite ? (
        <HeartBlue onClick={() => handleToggle(id)} />
      ) : (
        <HeartWhite
          onClick={() => {
            handleToggle(id);
          }}
        />
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

      <LearnMoreBtn onClick={hanlerLearnMore(id)}>Learn More</LearnMoreBtn>
    </ContainerCard>
  );
};

export default Card;
