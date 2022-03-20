import React from "react";
import { connect, styled } from "frontity";

const Hero = () => {
  return <HeroContainer>UX and Front End Dev</HeroContainer>;
};

export default connect(Hero);

const HeroContainer = styled.div`
  height: 400px;
  width: 100%;
  background-color: #001827;
  color: #869ba9;
  font-family: "Quicksand";
  font-size: 4em;
  text-align: center;
`;
