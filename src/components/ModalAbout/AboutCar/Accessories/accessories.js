import React from 'react';
import {
  AccessorHead,
  AccessoriesWrap,
  AcsesorBlock,
  AcsesorSpan,
  AcsesorWrap,
} from './accessories.styled';
import { Separator } from 'components/card/Card.styled';

const Accessories = ({ carCard }) => {
  const { accessories, functionalities } = carCard;
  return (
    <AcsesorBlock>
      <AccessorHead>Accessories and functionalities:</AccessorHead>

      <AccessoriesWrap>
        {accessories.map((acr, ind) => {
          return (
            <AcsesorWrap key={ind}>
              <AcsesorSpan>{acr}</AcsesorSpan>
              <Separator />
            </AcsesorWrap>
          );
        })}
      </AccessoriesWrap>
      <AccessoriesWrap>
        {functionalities.map((acr, ind) => {
          return (
            <AcsesorWrap key={ind}>
              <AcsesorSpan>{acr}</AcsesorSpan>
              <Separator />
            </AcsesorWrap>
          );
        })}
      </AccessoriesWrap>
    </AcsesorBlock>
  );
};

export default Accessories;
