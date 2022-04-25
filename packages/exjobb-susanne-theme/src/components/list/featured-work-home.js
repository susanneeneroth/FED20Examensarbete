import React, { useEffect } from "react";
import { connect, styled, decode } from "frontity";
import Link from "@frontity/components/link";
import ImagePlaceholder from "../../assets/image_placeholder.png";
// import FeaturedMedia from "../featured-media";

const FeaturedWork = ({ state, actions, libraries, item }) => {
  const Html2React = libraries.html2react.Component;
  // const author = state.source.author[item.author];
  // const date = new Date(item.date);

  useEffect(() => {
    actions.source.fetch("/category/featured");
  }, []);

  // Gets the data from featured category i Wordpress
  const data = state.source.get("/category/featured");

  if (data.isCategory) {
    const category = state.source.category[data.id];

    const posts = data.items.map(({ type, id }) => state.source[type][id]);

    return (
      <>
        <FeaturedContainer>
          <StyledTitle>{category.name}</StyledTitle>
          <FlexContainer>
            {posts.slice(0, 4).map((p) => (
              <FlexItem key={p.id}>
                <Image src={ImagePlaceholder} />
                <Link link={p.link} key={p.id}>
                  <h2>{p.title.rendered}</h2>
                  <Html2React html={p.excerpt.rendered} />
                </Link>
              </FlexItem>
            ))}
          </FlexContainer>
        </FeaturedContainer>
      </>
    );
  }

  return null;
};

export default connect(FeaturedWork);

const FeaturedContainer = styled.div`
  width: 1140px;
  margin: 0 auto 40px;
  /* min-height: 100vh; */

  @media (max-width: 560px) {
    max-width: 500px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    max-width: 500px;
    gap: 0;
  }
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

const Image = styled.img`
  border-radius: 3px;
`;
