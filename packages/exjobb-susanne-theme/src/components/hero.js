import React from "react";
import { connect, styled } from "frontity";
import MolnGreySmall from "../assets/moln_grey_small.png";
import MolnGreyBig from "../assets/moln_grey_big.png";

const Hero = () => {
  return (
    <HeroContainer>
      <CloudOne>
        <img src={MolnGreyBig} alt="cloud image one" />
      </CloudOne>
      <CloudTwo>
        <img src={MolnGreySmall} alt="cloud image two" />
      </CloudTwo>
      <TitleH1>UX and Front End Dev</TitleH1>
    </HeroContainer>
  );
};

export default connect(Hero);

const HeroContainer = styled.div`
  height: 400px;
  width: 100%;
  background-color: #001827;
  /* background: linear-gradient(#001827, #051622); */
  color: #869ba9;
  font-family: "Quicksand";
  text-align: center;
`;

const TitleH1 = styled.h1`
  font-size: 3.5em;
  position: relative;
  top: 50px;
  margin: 0;

  @media (max-width: 560px) {
    font-size: 2em;
  }
`;

const CloudOne = styled.div`
  position: relative;
  top: 55px;
  right: 220px;

  @media (max-width: 560px) {
    right: 110px;
    top: 50px;
  }
`;

const CloudTwo = styled.div`
  position: absolute;
  top: 265px;
  left: 790px;

  @media (max-width: 560px) {
    left: 320px;
    top: 240px;
  }
`;
