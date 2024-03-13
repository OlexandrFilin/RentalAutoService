import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { ReactComponent as SeparatorSVG } from '../../Images/separator.svg';


export const HeartBtn = styled.button`
 position: absolute;
 right: 14px;
  top: 14px;
  padding:3px;
  background-color: transparent; /* Встановлюємо прозорий колір фону */
  border: none; /* Видаляємо рамку */
  cursor: pointer; /* Змінюємо курсор при наведенні */
`
export const HeartBlueSvg = styled(FaHeart)`
  color: rgba(255, 255, 255, 0.8);
  color: #3470ff;
  width: 18px;
  height: 18px;
 
  
`;

export const HeartWhiteSvg = styled(FaRegHeart)`
  color: rgba(255, 255, 255, 0.8);
  width: 18px;
  height: 18px;


`;
export const ContainerCard = styled.li`
  width: 274px;
  position: relative;
  display: block;
  margin-bottom: 63px;
`;
export const ImgCar = styled.img`
  border-radius: 14px;
  width: 274px;
  height: 268px;

  background: linear-gradient(180deg, #121417 0%, rgba(18, 20, 23, 0) 100%);
  margin-bottom: 14px;
`;

export const AboutCarParagr = styled.p`
  width: 265px;
  height: 24px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
  text-align: justify;
  margin-bottom: 8px;
`;
export const AboutCarSpan = styled.span`
  float: left;
`;

export const ModelCarSpan = styled.span`
  color: #3470ff;
`;
export const RentalPriceSpan = styled.span`
  float: right;
`;
export const AddresParagr = styled.p`
  clear: both;

  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;
export const Separator = styled(SeparatorSVG)`
  stroke-width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
`;
export const LearnMoreBtn = styled.button`
  border-radius: 12px;
  padding: 12px 96px;
  width: 274px;
  height: 44px;
  background: #3470ff;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;

  &:hover {
    background: #0b44cd;
  }
`;
