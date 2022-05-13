import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { portfolioImages } from "../../data/portfolioImages";
import ListItemPortfolio from "./list-item-portfolio";

const PortfolioHome = ({ state, actions, libraries, item }) => {
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
          <hr />
          <StyledTitle>{category.name}</StyledTitle>
          <FlexPortfolioContainer>
            {data.items.slice(0, 3).map(({ type, id }) => {
              const item = state.source[type][id];

              // Render one Item component for each one.
              return <ListItemPortfolio key={item.id} item={item} />;
            })}
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

const StyledTitle = styled.h1`
  color: #1ba098;
  font-family: "pacifico";
  margin: auto;
  text-align: center;
`;
