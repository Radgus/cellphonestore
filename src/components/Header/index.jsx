import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../resource/colors/index';
import LoginContainer from './components/LoginContainer';
import logo from '../../resource/images/macropay-logo.png';
import cartIcon from '../../resource/images/shopping-icon.png';
import CircularDiv from './components/CircularDiv';


const LogoContainer = styled.div`
  background-color: ${colors.third_bg};
  height: 7rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const OptionsContainer = styled.div`
  padding: 0 1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  color: ${colors.secondary_text};
  background-color: ${colors.third_bg};
  border-top: 0.1rem solid ${colors.secondary_bg};
`;

const H4 = styled.h4`
  margin: 0 1.5rem;
  cursor: pointer;
  :hover {
    color: ${colors.fourth_text};
  }
  font-size: 1.2rem;
`;

const Header = () => {

  return (
    <>
    <LogoContainer>
      <img src={logo} alt="logo macropay" width='90px'/>
      <CircularDiv>
        <img src={cartIcon} alt="logo macropay" width='30px'/>
      </CircularDiv>
      <LoginContainer/>
    </LogoContainer>
    <OptionsContainer>
      <H4>Products</H4>
      <H4>About</H4>
      <H4>Contact</H4>
    </OptionsContainer>

    </>
  )
}

export default Header;
