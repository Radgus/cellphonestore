import React from "react";
import styled from "styled-components";
import colors from '../../resource/colors';


const Container = styled.div`
  background-color: ${colors.fourth_bg};
  height: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
`;


const Footer = () => {

  return (
    <Container>Footer</Container>
  )
}

export default Footer;
