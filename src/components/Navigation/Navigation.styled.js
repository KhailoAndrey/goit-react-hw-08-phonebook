import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: black;
  border-bottom: 2px solid black;

  &:hover {
      text-decoration: none;

    color: green;
    border-bottom: 2px solid #87cefa;
  }

  &.active {
      text-decoration: none;

    color: blue;
    border-bottom: 2px solid white;
  }
`;