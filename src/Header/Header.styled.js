import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerHeader = styled.div`
  width: 1184px;
  padding-left: 290px;
`;

export const NavLinkHeader = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 24px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: blue;
  }
`;

export const AddedBrandAuto = styled.button``;
