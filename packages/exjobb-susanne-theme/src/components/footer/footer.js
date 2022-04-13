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
          <ContactForm>
            <h2>Send me a line</h2>
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
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
`;

const ContactForm = styled.div`
  width: 70%;
  height: auto;
  margin: auto;
  padding: 30px;
  text-align: center;

  h2 {
    margin-bottom: 0;
  }

  .wpcf7 {
    width: 100% !important;
    margin: auto;
    text-align: center;
  }

  .wpcf7 input[type="text"] {
    width: 100% !important;
    background-color: #869ba9;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 3px;
    margin-top: 15px;
    margin-bottom: 10px;
    /* flex: 1; */
  }

  .wpcf7 input[type="email"] {
    width: 100% !important;
    background-color: #869ba9;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 3px;
    margin-top: 15px;
    margin-bottom: 10px;
    /* flex: 1; */
  }

  .wpcf7 label {
    color: #1ba098;
  }

  .wpcf7 textarea {
    background-color: #869ba9;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 3px;
    width: 100% !important;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .wpcf7 input[type="submit"] {
    background-color: #d65079;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    color: #fff;
    margin-top: 0;
  }

  /* .wpcf7 input::placeholder {
    color: pink;
  } */
`;
