import React from 'react';

import GeneralInfo from './GeneralInfo/generalInfo';
import Accessories from './Accessories/accessories';
import RentCondition from './RentCondition/rentCondition';

function AboutCar({ carCard }) {
  return (
    <>
      <GeneralInfo carCard={carCard} />
      <Accessories carCard={carCard} />
      <RentCondition carCard={carCard} />
    </>
  );
}

export default AboutCar;
