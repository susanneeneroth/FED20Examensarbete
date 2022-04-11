import React from "react";
import { connect, styled } from "frontity";

// import FooterForm from "./footer-form";

const Footer = ({ state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const data = state.source.get("/contact-footer");
  const contactForm = state.source.page[data.id];

  return (
    <>
      <FooterContainer>
        <InnerContainer>
          <h2>Send me a line</h2>
          <ContactForm>
            <Html2React html={contactForm.content.rendered} />
          </ContactForm>
        </InnerContainer>
      </FooterContainer>
    </>

    // <FooterContainer>
    //   <InnerContainer>
    //     <FooterForm />
    //   </InnerContainer>
    // </FooterContainer>
  );
};

export default connect(Footer);

const FooterContainer = styled.footer`
  color: #1ba098;
  background-color: #001827;
  font-family: "pacifico";
  width: 100%;
  height: auto;
  position: relative;
  left: 0;
  bottom: 0;
`;

const InnerContainer = styled.div`
  width: 70vw;
  height: auto;
  margin: auto;
  padding: 30px;
  text-align: center;
`;

const ContactForm = styled.div`
  width: 70%;
  height: auto;
  margin: auto;
  padding: 30px;
  text-align: center;
  background-color: pink;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .wpcf7 input[type="text"] {
    background-color: purple;
    flex: 1;
  }

  .wpcf7 input[type="email"] {
    background-color: purple;
    flex: 1;
  }

  .wpcf7 input,
  label {
    color: #fff;
  }

  .wpcf7 input,
  textarea {
    background-color: green;
  }

  .wpcf7 input[type="submit"] {
    background-color: purple;
  }
`;

// const FormInput = styled.input.attrs({
//   type: 'submit',
//   value: 'Submit'
// })`
//   background: #00aec9;
//   color: #fff;
//   cursor: pointer;
//   margin-bottom: 0;
//   text-transform: uppercase;
//   width: 100%;
//   border-radius: 5px;
//   height: 35px;
//   border-color: transparent;
//   box-shadow: 0px;
//   outline: none;
//   transition: 0.15s;
//   text-align: center;
//   &:active {
//     background-color: #f1ac15;
//   }
// `
