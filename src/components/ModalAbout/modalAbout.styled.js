import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(18, 20, 23, 0.5);
  //backdrop-filter: blur(2px);
  z-index: 100;
  transition-property: opacity, visibility;
  transition-duration: 1250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: scroll;
`;

export const ContainerModal = styled.div`
  padding: 40px;
  position: absolute;
  border-radius: 24px;
  width: 541px;
  height: 752px;
  background: #fff;
  top: calc(50%);
  left: calc(50%);
  transform: translateY(-50%) translateX(-50%);
`;

export const CrossCloseModal = styled(MdClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
`;

export const ImgCar = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  background: #f3f3f2;
  /* margin-left: auto;
  margin-right: auto; */
  margin-bottom: 14px;
`;
