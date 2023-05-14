import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: black;
  &.active {
    color: #FF4F00;
  }
  &:hover {
    color: green;
    scale: 1.2;
  }
`;