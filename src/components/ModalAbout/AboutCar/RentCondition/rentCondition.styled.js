import styled from 'styled-components';

export const RentConditionWrap = styled.div``;
export const RentConditionHead = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`;
export const RentConditionItem = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;

  border-radius: 35px;
  padding: 7px 14px;
  height: 32px;
  background: #f9f9f9;
  display: flex;
`;

export const RentConditValue = styled.div`
  font-weight: 600;
  color: #3470ff;
`;
export const RentConditionRow1 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 24px;
`;
export const RentConditionCallBtn = styled.a`
  border-radius: 12px;
  padding: 12px 48px;
  width: 168px;
  height: 44px;
  background-color: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;

  &:hover {
    background-color: #0b44cd;
  }
`;
