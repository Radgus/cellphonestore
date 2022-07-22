import React from "react";
import styled from "styled-components";
import macropay from '../../resource/images/macropay.jpg';
import FormSection from "./FormSection";
import Galery from "./Galery/inde";
import Search from '../../components/Search';


const Section = styled.section`
  padding: 1rem 2rem;
`;

const AboutContainer = styled.div`
  min-height: 16rem;
  display: flex;
  p {
    padding: 1rem 1.5rem;
    text-align: justify;
    font-size: 1.1rem;
  }
`;

const Img = styled.img`
  width: 45%;
  max-width: 25rem;
  height: 100%;
  object-fit: cover;
`;



const Home = () => {

  return (
    <>
      <Search />
      <Section id="Products">
        <h3>Celulares</h3>
        <br />
        <Galery/>
      </Section>

      <Section id='About'>
        <h3>¿Quiénes somos?</h3>
        <br />
        <AboutContainer>
          <Img src={macropay} alt="Macropay profile" />
          <p>Somos una empresa que ha revolucionado la industria 
            retail con una nueva forma de conectar a las 
            personas a través de la venta de celulares a crédito. 
            Ofrecemos diversos productos financieros, 
            de manera eficiente, ágil, cómoda y confiable.</p>
        </AboutContainer>
      </Section>

      <Section id="Contact">
        <h3>Contactanos para estrena celular !!!</h3>
        <br />
        <FormSection />
      </Section>
    </>
  )
}

export default Home;
