import styled from 'styled-components';
import travelImage from '../../../Images/travel2.jpg';

export const HeroHome = styled.section`
  margin-top: 20px;
  width: 100%; /* Змінено на відносну одиницю */
  height: 60vh; /* Змінено на відносну одиницю */
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.1),
      rgba(46, 47, 66, 0.1)
    ),
    url(${travelImage}); /* Використання імпортованого шляху */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;