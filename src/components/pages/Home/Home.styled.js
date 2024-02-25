import styled from 'styled-components';
import travelImage from '../../../Images/travel2.jpg';

export const HeroHome = styled.section`
  margin-top: 20px;
  width: 100%; 
  height: 50vh; 
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.1),
      rgba(46, 47, 66, 0.1)
    ),
    url(${travelImage}); /* Використання імпортованого шляху */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom:50px;
`;
export const AboutDiv = styled.section`
  padding-left: 150px;
  padding-right: 150px;
  font-size: 37px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:20px;
`;
export const WelcomHeader = styled.h1`
  padding-left: 150px;
  padding-right: 150px;
  margin-left: auto;
  margin-right: auto;
  font-size: 42px;
`;
