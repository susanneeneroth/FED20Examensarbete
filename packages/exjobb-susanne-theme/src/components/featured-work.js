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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque,
          </p>
        </FlexItem>
        <FlexItem>
          <img src={ImagePlaceholder} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque,
          </p>
        </FlexItem>
      </FlexContainer>
      <FlexContainer>
        <FlexItem>
          <img src={ImagePlaceholder} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque,
          </p>
        </FlexItem>
        <FlexItem>
          <img src={ImagePlaceholder} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque,
          </p>
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
  background: pink;
  margin: 35px auto;
`;

const FlexItem = styled.div`
  flex: 1;
`;

const StyledTitle = styled.h1`
  color: #1ba098;
  font-family: "pacifico";
  margin: auto;
`;
