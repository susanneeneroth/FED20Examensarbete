import React from "react";
import { connect, styled } from "frontity";
import ListItemFeatured from "./list-item-featured";

const FeaturedWork = ({ state, actions, libraries, item }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      <StyledTitle>Featured Work</StyledTitle>
      {/* Iterate over the items of the list. Max 3 blog items on frontpage */}
      <FeaturedContainer>
        <FlexContainer>
          {data.items.slice(0, 4).map(({ type, id }) => {
            const item = state.source[type][id];

            // Render one Item component for each one.
            return <ListItemFeatured key={item.id} item={item} />;
          })}
        </FlexContainer>
      </FeaturedContainer>
    </>
  );
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
  gap: 60px;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    max-width: 500px;
    gap: 0;
  }
`;

const StyledTitle = styled.h1`
  color: #1ba098;
  font-family: "pacifico";
  text-align: center;
`;
