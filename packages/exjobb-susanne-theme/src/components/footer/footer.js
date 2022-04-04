import React from "react";
import { connect, styled } from "frontity";
// import FooterForm from "./footer-form";

const Footer = ({ state, libraries }) => {
  const data = state.source.get("/contact-footer");
  const contactForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <ContactForm>
        <Html2React html={contactForm.content.rendered} />
      </ContactForm>
    </>
    // <FooterContainer>
    //   <InnerContainer>
    //     <FooterForm />
    //   </InnerContainer>
    // </FooterContainer>
  );
};

export default connect(Footer);

// const FooterContainer = styled.footer`
//   color: #1ba098;
//   background-color: #001827;
//   font-family: "pacifico";
//   width: 100%;
//   height: 400px;
//   position: relative;
//   left: 0;
//   bottom: 0;
// `;

// const InnerContainer = styled.div`
//   width: 70vw;
//   height: auto;
//   margin: auto;
//   padding: 30px;
// `;

const ContactForm = styled.div`
  width: 70%;
  height: auto;
  margin: auto;
  padding: 30px;
  text-align: center;
  /* background-color: pink; */

  h2 {
    font-size: 1.5em;
    margin-top: 0;
  }
`;

const FormInput = styled.input``;
