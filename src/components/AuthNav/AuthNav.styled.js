import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: black;
  margin-left: 20px;
  margin-right: 20px;

  &:hover {
    color: green;
  }

  &.active {
    color: #FF4F00;
  }
`;