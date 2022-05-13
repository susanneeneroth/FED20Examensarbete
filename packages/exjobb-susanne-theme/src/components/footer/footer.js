import React from "react";
import { connect, styled } from "frontity";

const Footer = ({ state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const data = state.source.get("/contact-footer");
  const contactForm = state.source.page[data.id];

  return (
    <>
      <FooterContainer>
        <ContactForm>
          <h2>Send me a line</h2>
          <Html2React html={contactForm.content.rendered} />
        </ContactForm>
      </FooterContainer>
    </>
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
  padding-top: 30px;
  padding-bottom: 50px;
`;

const ContactForm = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  text-align: center;
  padding-top: 30px;

  h2 {
    margin-bottom: 0;
    margin-top: 0;
  }

  .wpcf7-form {
    width: 840px !important;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }

  .wpcf7-form input[type="text"] {
    background-color: #869ba9;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 2px;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  .wpcf7-form input[type="email"] {
    background-color: #869ba9;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 2px;
    margin-top: 5px;
    margin-bottom: -10px;
  }

  .wpcf7-form label {
    color: #1ba098;
  }

  .wpcf7-form textarea {
    background-color: #869ba9;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 2px;
    margin-top: 5px;
    margin-bottom: 4px;
  }

  .wpcf7-form input[type="submit"] {
    background-color: #d65079;
    padding: 10px 15px;
    border: none;
    border-radius: 2px;
    color: #fff;
    margin-top: 0;
    position: relative;
    top: 190px;
  }

  @media screen and (max-width: 560px) {
    .wpcf7-form {
      width: 50vw !important;
      flex-wrap: wrap;
    }

    .wpcf7-form input {
      box-sizing: border-box;
      max-width: 50vw;
    }

    .wpcf7-form textarea {
      box-sizing: border-box;
      max-width: 50vw;
      margin-top: 10px;
      margin-bottom: 0px;
    }

    .wpcf7-form input[type="submit"] {
      position: relative;
      top: -30px;
      left: 90px;
    }
  }
`;
