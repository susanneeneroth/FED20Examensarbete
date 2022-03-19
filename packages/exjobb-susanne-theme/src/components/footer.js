import React from "react";
import { connect, styled } from "frontity";

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>Footer</InnerContainer>
    </FooterContainer>
  );
};

export default connect(Footer);

const FooterContainer = styled.footer`
  color: #1ba098;
  background-color: #001827;
  font-family: "pacifico";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 400px;
`;

const InnerContainer = styled.div`
  width: 70vw;
  height: auto;
  margin: auto;
  padding: 30px;
`;
