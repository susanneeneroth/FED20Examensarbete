import React, { useEffect } from "react";
import { connect, styled, decode } from "frontity";
import Link from "@frontity/components/link";
// import FeaturedMedia from "../featured-media";
import ImagePlaceholder from "../../assets/image_placeholder_small.png";

const PortfolioHome = ({ state, actions, libraries, item }) => {
  const Html2React = libraries.html2react.Component;

  useEffect(() => {
    actions.source.fetch("/category/portfolio");
  }, []);

  // Gets the data from portfolio category i Wordpress
  const data = state.source.get("/category/portfolio");

  if (data.isCategory) {
    const category = state.source.category[data.id];

    const posts = data.items.map(({ type, id }) => state.source[type][id]);

    return (
      <>
        <PortfolioContainer>
          <StyledTitle>{category.name}</StyledTitle>
          <FlexPortfolioContainer>
            {posts.slice(0, 3).map((p) => (
              <FlexPortfolioItem key={p.id}>
                <img src={ImagePlaceholder} />
                <Link link={p.link} key={p.id}>
                  <h2>{p.title.rendered}</h2>
                  {/* <FeaturedMedia src={fmedia.source_url} /> */}
                  <Html2React html={p.excerpt.rendered} />
                </Link>
              </FlexPortfolioItem>
            ))}
          </FlexPortfolioContainer>
        </PortfolioContainer>
      </>
    );
  }

  return null;
};

export default connect(PortfolioHome);

const PortfolioContainer = styled.div`
  width: 1100px;
  margin: 0 auto 40px;
  /* min-height: 100vh; */
  justify-content: center;

  @media (max-width: 560px) {
    max-width: 500px;
  }
`;

const FlexPortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    max-width: 500px;
    gap: 0;
  }
`;

const FlexPortfolioItem = styled.div`
  color: #cbe4f5;
  text-align: center;
  margin-top: 10px;
  max-width: 300px;

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

const TitleH1 = styled.h1`
  color: #1ba098;
`;

const Item = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #1ba098;
  font-size: 0.9em;
  box-sizing: border-box;
  display: inline;
  font-family: "Pacifico";

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }
`;

// const StyledLink = styled(Link)`
//   color: #fff;
// `;

// const Container = styled.section`
//   width: 1140px;
//   height: auto;
//   margin: 0;
//   list-style: none;
//   display: flex;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   padding: 20px 0;

//   /* background-color: pink; */
// `;

// const Header = styled.h3`
//   font-weight: 300;
//   text-transform: capitalize;
//   color: rgba(12, 17, 43, 0.9);
// `;
