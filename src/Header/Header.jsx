import React from 'react'
import { ContainerHeader, NavLinkHeader } from './Header.styled'
//import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ContainerHeader className='container'>
        <NavLinkHeader to ="/"> Home</NavLinkHeader>
        <NavLinkHeader to ="/catalog">Catalog</NavLinkHeader>
        <NavLinkHeader to ="/favorites">Favorites</NavLinkHeader>
      
    </ContainerHeader>
  )
}

export default Header