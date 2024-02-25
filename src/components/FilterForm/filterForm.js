import React from 'react';
import brands from 'sourseJson/makes.json';
import {
  BrandOptions,
  BrandSelector,
  FormWrap,
  FromToGlobWrap,
  FromToWrap,
  InputInpFrom,
  InputTo,
  LabelInpFrom,
  LabelInpTo,
  SalectBrandLabel,
  SearchBtn,
  SelectWrap,
  ToSelector,
} from './filterForm.styled';

const FilterForm = () => {
  const uniqueBrands = [...new Set(brands.map(elem => elem.mrand))].sort();

  return (
    <FormWrap>
      <SelectWrap>
        <SalectBrandLabel htmlFor="selectBrand">Car brand</SalectBrandLabel>
        <BrandSelector
          id="selectBrand"
          name="selectBrand"
          defaultValue="Enter the text"
        >
          <BrandOptions value="Enter the text">Enter the text</BrandOptions>
          {uniqueBrands.map((brand, index) => (
            <BrandOptions key={index} value={brand}>
              {brand}
            </BrandOptions>
          ))}
        </BrandSelector>
      </SelectWrap>

      <SelectWrap>
        <SalectBrandLabel htmlFor="selectBrand">Price/1hour</SalectBrandLabel>
        <ToSelector id="selectBrand" name="selectBrand" defaultValue="To $">
          <BrandOptions value="To $">To $</BrandOptions>
          {[...Array(10).keys()].map(value => (
            <BrandOptions key={(value + 1) * 10} value={(value + 1) * 10}>
              {(value + 1) * 10}
            </BrandOptions>
          ))}
        </ToSelector>
      </SelectWrap>
      <FromToGlobWrap>
        <SalectBrandLabel htmlFor="selectBrand">Car milage/km</SalectBrandLabel>
        <FromToWrap>
          <LabelInpFrom for="inputFrom">From:</LabelInpFrom>
          <InputInpFrom type="text" id="inputFrom" name="inputFrom" />

          <LabelInpTo for="inputFrom">To:</LabelInpTo>
          <InputTo type="text" id="inputFrom" name="inputFrom" />
        </FromToWrap>
      </FromToGlobWrap>
      <SearchBtn type="Submit">Search</SearchBtn>
    </FormWrap>
  );
};

export default FilterForm;
