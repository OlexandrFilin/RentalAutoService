import React from 'react';
import numeral from 'numeral';
import {
  RentConditValue,
  RentConditionCallBtn,
  RentConditionHead,
  RentConditionItem,
  RentConditionRow1,
  RentConditionWrap,
} from './rentCondition.styled';
import { parseRentalCondition } from 'services/parseDataCard';

const phoneNumber = '+380730000000';
const RentCondition = ({ carCard }) => {
  const { rentalConditions, mileage, rentalPrice } = carCard;
  const objRentalCondit = parseRentalCondition(rentalConditions);

  return (
    <RentConditionWrap>
      <RentConditionHead>Rental Conditions:</RentConditionHead>
      <RentConditionRow1>
        <RentConditionItem>
          {objRentalCondit.minAge}
          <RentConditValue>{objRentalCondit.minAgeValue}</RentConditValue>
        </RentConditionItem>
        <RentConditionItem>{objRentalCondit.license}</RentConditionItem>
      </RentConditionRow1>

      <RentConditionRow1>
        <RentConditionItem>{objRentalCondit.required}</RentConditionItem>
        <RentConditionItem>
          Mileage:
          <RentConditValue>{numeral(mileage).format('0,0')}</RentConditValue>
        </RentConditionItem>
        <RentConditionItem>
          Price:
          <RentConditValue>{`${rentalPrice.slice(1)}$`}</RentConditValue>
        </RentConditionItem>
      </RentConditionRow1>
      <RentConditionCallBtn href={`tel:${phoneNumber}`}>
        Rental car
      </RentConditionCallBtn>
    </RentConditionWrap>
  );
};

export default RentCondition;
