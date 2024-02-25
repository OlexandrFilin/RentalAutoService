import styled from 'styled-components';
const Selector = `
    border-radius: 14px;
      height: 48px;
    background: #f7f7fb;
    margin-bottom: 5px;
    border: none;
`;

export const FormWrap = styled.form`
  width: 859px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  column-gap: 18px;
`;
export const SelectWrap = styled.div`
  display: block;
`;

export const SalectBrandLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: #8a8a89;
`;

export const BrandSelector = styled.select`
  ${Selector}
  padding: 14px 85px 14px 18px;
  width: 225px;
`;
export const ToSelector = styled.select`
  ${Selector}
  padding: 14px 18px;
  width: 125px;
`;
export const BrandOptions = styled.option`
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  width: 224px;
  height: 272px;
  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);
  background: #fff;
`;
export const FromToGlobWrap = styled.div`
  display: block;
`;
// const Selector = ``
export const FromToWrap = styled.div`
  display: flex;
`;
const ComonStylesFromTo = ` 
 width: 80px;
  height: 48px;
  border: none;
  background: #f7f7fb;
`;
export const LabelInpFrom = styled.label`
  ${ComonStylesFromTo}

  border-radius: 14px 0 0 14px;
  padding: 15px;
`;

export const InputInpFrom = styled.input`
  ${ComonStylesFromTo}
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;
export const LabelInpTo = styled.label`
  padding: 15px;
  ${ComonStylesFromTo}
`;

export const InputTo = styled.input`
  ${ComonStylesFromTo}
  border-radius: 0 14px 14px 0;
`;

export const SearchBtn = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  background: #3470ff;
  margin-top: 25px;
  &:hover {
    background: #0b44cd;
  }
`;
