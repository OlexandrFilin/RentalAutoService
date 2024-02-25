import React from 'react';
import { AboutDiv, HeroHome, WelcomHeader } from './Home.styled';

const Home = () => {
  return (
    <>
      <HeroHome>home</HeroHome>
      <AboutDiv>
        In our center you can choose a car to suit your taste at affordable
        prices and go up in price.
      </AboutDiv>
      <WelcomHeader>We wish you a safe and happy journey.</WelcomHeader>
    </>
  );
};

export default Home;
