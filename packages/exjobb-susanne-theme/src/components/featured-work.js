import React from "react";
import { connect, styled } from "frontity";
import ImagePlaceholder from "../assets/image_placeholder.png";

const FeaturedWork = () => {
  return (
    <FeaturedContainer>
      <StyledTitle>Featured Work</StyledTitle>
      <FlexContainer>
        <FlexItem>
          <img src={ImagePlaceholder} />
          <h2>Braindump.nu</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </FlexItem>
        <FlexItem>
          <img src={ImagePlaceholder} />
          <h2>Photo sharing app</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </FlexItem>
      </FlexContainer>
      <FlexContainer>
        <FlexItem>
          <img src={ImagePlaceholder} />
          <h2>Pink Web Dev</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </FlexItem>
        <FlexItem>
          <img src={ImagePlaceholder} />
          <h2>Movie API app</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </FlexItem>
      </FlexContainer>
    </FeaturedContainer>
  );
};

export default connect(FeaturedWork);

const FeaturedContainer = styled.div`
  width: 1140px;
  margin: 0 auto;
  min-height: 100vh;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
`;

const FlexItem = styled.div`
  color: #cbe4f5;
  text-align: center;
  margin-top: 30px;

  h2 {
    font-family: "pacifico";
    color: #1ba098;
    text-align: left;
    margin-left: 20px;
  }

  p {
    text-align: left;
    margin-left: 20px;
  }
`;

const StyledTitle = styled.h1`
  color: #1ba098;
  font-family: "pacifico";
  margin: auto;
  text-align: center;
`;
