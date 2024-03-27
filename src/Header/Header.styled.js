import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerHeader = styled.div`
  width: 1184px;
  padding-left: 290px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const NavLinkHeader = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 24px;
  font-weight: 700;
  color: #2a363b;

  &.active {

    color: white;
    background-color: orangered;
font-size:24px;
  }
`;

export const Logo = styled.div`
  font-weight: 700;
  margin: 0;
  /* padding-top:24px; */
  display:flex;
  align-items: center;

> img{
  margin-right:12px;
}
`;
export const AddedBrandAuto = styled.button``;
