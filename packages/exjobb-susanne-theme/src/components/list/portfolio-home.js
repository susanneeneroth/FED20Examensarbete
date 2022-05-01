import React, { useEffect } from "react";
import { connect, styled, decode } from "frontity";
import Link from "@frontity/components/link";
import ImagePlaceholder from "../../assets/image_placeholder_small.png";
import FeaturedMedia from "../featured-media";
import { portfolioImages } from "../../data/portfolioImages";

const PortfolioHome = ({ state, actions, libraries, item }) => {
  const Html2React = libraries.html2react.Component;
  // const author = state.source.author[item.author];
  // const date = new Date(item.date);
  // const fmedia = state.source.attachment[item.FeaturedMedia];

  useEffect(() => {
    actions.source.fetch("/category/portfolio");
  }, []);

  // useEffect(() => {
  //   actions.source.fetch("/portfolio-archive/");
  // }, []);

  // Gets the data from portfolio category i Wordpress
  const data = state.source.get("/category/portfolio");
  // const post = state.source[data.type][data.id];
  // const fmediaId = post.featured_media;

  if (data.isCategory) {
    const category = state.source.category[data.id];

    const posts = data.items.map(({ type, id }) => state.source[type][id]);
    console.log("portfolioimages", portfolioImages);

    return (
      <>
        <PortfolioContainer>
          <hr />
          <StyledTitle>{category.name}</StyledTitle>
          <FlexPortfolioContainer>
            {posts.slice(0, 3).map((p) => (
              <FlexPortfolioItem key={p.id}>
                {/* <FeaturedMedia id={item.featured_media} /> */}
                {portfolioImages.map((item, i) => (
                  <Image src={item.img} key={i} />
                ))}
                {/* <Image src={ImagePlaceholder} /> */}

                <Link link={p.link} key={p.id}>
                  <h2>{p.title.rendered}</h2>

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
  justify-content: center;
  box-sizing: border-box;

  hr {
    margin-bottom: 50px;
    color: #869ba9;
    width: 350px;
  }

  @media (max-width: 560px) {
    max-width: 500px;
  }
`;

const FlexPortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 20px;

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

const Image = styled.img`
  border-radius: 3px;
`;
