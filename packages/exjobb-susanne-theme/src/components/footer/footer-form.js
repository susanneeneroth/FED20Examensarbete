import React from "react";
import { connect, styled } from "frontity";

const FooterForm = () => {
  return (
    <>
      <FormContainer>
        <h2>Send me a line</h2>
        <FormInput></FormInput>
        <FormInput></FormInput>
        <br />
        <FormInput></FormInput>
        <button>Send</button>
      </FormContainer>
    </>
  );
};

export default connect(FooterForm);

const FormContainer = styled.div`
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
