import React from 'react';
//import fs from 'fs/promises';

import {
  AddedBrandAuto,
  ContainerHeader,
  Logo,
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
      console.log(JSON.stringify(brandsCars));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <ContainerHeader className="container">
       <Logo>
          <img src="https://res.cloudinary.com/drj0am35a/image/upload/v1710688296/111/icons8-car-100_senpeo.png" alt="favicon" width ="50px"/>
      CAR RENTAL
        </Logo>
      
      <NavLinkHeader to="/"> Home</NavLinkHeader>
      <NavLinkHeader to="/catalog">Catalog</NavLinkHeader>
      <NavLinkHeader to="/favorites">Favorites</NavLinkHeader>
      <AddedBrandAuto onClick={handlerAddBrands}></AddedBrandAuto>
    </ContainerHeader>
  );
};

export default Header;
