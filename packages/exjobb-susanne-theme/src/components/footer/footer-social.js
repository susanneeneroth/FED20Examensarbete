import React from "react";
import { connect, styled } from "frontity";

const FooterSocial = () => {
  return <SocialContainer>Copyright © 2022</SocialContainer>;
};

export default connect(FooterSocial);

const SocialContainer = styled.footer`
  width: 100%;
  height: 40px;
  padding-top: 20px;
  color: #869ba9;
  background-color: #051622;
  font-size: 0.8rem;
  font-family: "quicksand";
  text-align: center;
  position: relative;
  left: 0;
  bottom: 0;
`;
