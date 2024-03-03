import styled from 'styled-components';

export const ContainerPage = styled.div`
  padding: 50px 128px;
  width: 1440px;

`;
export const LoadMoreBtn = styled.button`
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  border: none;
  background-color: #fff;
  color: #3470ff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 63px;
  overflow-y: auto;
  &:hover {
    color: #0b44cd;
  }
`;

export const WrapperCards = styled.div`
  display: flex;
  column-gap: 29px;
  flex-wrap: wrap;
`;
