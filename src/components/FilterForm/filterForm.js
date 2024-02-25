import React, { useState } from 'react';

import { FormWrap, SearchBtn } from './filterForm.styled';
import FiltrParam from './filtrParam';

const FilterForm = ({ handleSetFilter }) => {
  const [brand, setBrand] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    handleSetFilter({
      brand,
    });
  };
  const handleChangeBrand = e => {
    e.target.value !== 'Enter the text'
      ? setBrand(e.target.value)
      : setBrand('');
  };

  return (
    <FormWrap>
      <FiltrParam changeBrand={handleChangeBrand} />
      <SearchBtn type="Submit" onClick={handleSubmit}>
        Search
      </SearchBtn>
    </FormWrap>
  );
};

export default FilterForm;
