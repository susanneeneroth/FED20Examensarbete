import React from "react";
import { connect, styled } from "frontity";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/github.png";

const FooterSocial = () => {
  return (
    <Container>
      <CopyContainer>Copyright © 2022</CopyContainer>
      <SocialContainer>
        <SocialLink
          href="https://www.linkedin.com/in/susanneeneroth/"
          target="_blank"
        >
          <img src={LinkedIn} />
        </SocialLink>
        <a href="https://github.com/susanneeneroth" target="_blank">
          <img src={GitHub} />
        </a>
      </SocialContainer>
    </Container>
  );
};

export default connect(FooterSocial);

const Container = styled.div`
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
  display: flex;
`;

const CopyContainer = styled.footer`
  flex: 1;
  text-align: right;
`;

const SocialContainer = styled.footer`
  flex: 1;
`;

const SocialLink = styled.a`
  margin-right: 10px;
`;
