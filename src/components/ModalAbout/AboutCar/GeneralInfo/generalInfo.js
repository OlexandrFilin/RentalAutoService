import React from 'react';
import {
  AboutCarParagr,
  AboutCarSpan,
  AddresParagr,
  DeskriptionPrgr,
  ModelCarSpan,
} from './generalInfo.styled';
import { parseAddress } from 'services/parseDataCard';
import { Separator } from 'components/card/Card.styled';

const GeneralInfo = ({ carCard }) => {
  const {
    id,
    model,
    type,
    make,
    address,
    year,
    engineSize,
    fuelConsumption,
    description,
  } = carCard;
  //витягуємо з рядка адреси країну та місто
  const objAddress = parseAddress(address);
  return (
    <AboutCarParagr>
      <AboutCarSpan>
        {`${make} `}
        <ModelCarSpan>{`${model}`}</ModelCarSpan>
        {`, ${year}`}
      </AboutCarSpan>

      <AddresParagr>
        {` ${objAddress.city} `}
        <Separator />
        {` ${objAddress.country} `}
        <Separator />
        {`Id: ${id} `}
        <Separator />
        {`Year: ${year}`}
        <Separator />
        {`Type: ${type} `}
      </AddresParagr>
      <AddresParagr>
        {`Fuel consumption: ${fuelConsumption} `}
        <Separator />
        {` ${model} `}
        <Separator />
        {`Engine Size: ${engineSize} `}
      </AddresParagr>
      <DeskriptionPrgr>{` ${description} `}</DeskriptionPrgr>
    </AboutCarParagr>
  );
};

export default GeneralInfo;
