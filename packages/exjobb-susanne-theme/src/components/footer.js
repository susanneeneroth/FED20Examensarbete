import React from "react";
import { connect, styled } from "frontity";

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>Send me a line</InnerContainer>
    </FooterContainer>
  );
};

export default connect(Footer);

const FooterContainer = styled.footer`
  color: #1ba098;
  background-color: #001827;
  font-family: "pacifico";
  width: 100%;
  height: 400px;
  position: relative;
  left: 0;
  bottom: 0;
`;

const InnerContainer = styled.div`
  width: 70vw;
  height: auto;
  margin: auto;
  padding: 30px;
`;
