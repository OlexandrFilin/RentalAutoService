import React from 'react';
//import fs from 'fs/promises';

import {
  AddedBrandAuto,
  ContainerHeader,
  NavLinkHeader,
} from './Header.styled';
import { getAllCars } from 'services/getCars';
import { nanoid } from 'nanoid';

const Header = () => {
  
  //const FileName = '../sourseJson/makes.json';
  const handlerAddBrands = async () => {
    try {
      const data = await getAllCars(); 
      const brandsCars = data.map(elem => ({
        id: nanoid(),
        mrand: elem.make,
      }));
      //await fs.writeFile(FileName, JSON.stringify(brandsCars)); 
     console.log(JSON.stringify(brandsCars))
    } catch (error) {
      console.log('error', error);
    }
  };
 
  return (
    <ContainerHeader className="container">
      <NavLinkHeader to="/"> Home</NavLinkHeader>
      <NavLinkHeader to="/catalog">Catalog</NavLinkHeader>
      <NavLinkHeader to="/favorites">Favorites</NavLinkHeader>
      <AddedBrandAuto onClick={handlerAddBrands}></AddedBrandAuto>
    </ContainerHeader>
  );
};

export default Header;
