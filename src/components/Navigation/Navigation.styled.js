import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: black;
  &.active {
    color: blue;
  }
  &:hover {
    color: green;
    border-bottom: 2px solid red;
  }
`;