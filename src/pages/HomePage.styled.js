import styled from 'styled-components';

export const HomeTitle = styled.p`
  max-width: 400px;
  padding-left: 15px;
  font-size: 32px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: 26px;
  }
`;

export const WrapperHomePage = styled.div`
  position: absolute;
  top: 25vh;
  right: 20vw;
  width: 400px;
`;