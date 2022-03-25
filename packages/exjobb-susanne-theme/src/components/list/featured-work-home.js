import React, { useEffect } from "react";
import { connect, styled, decode } from "frontity";
import Pagination from "./pagination";
import Link from "@frontity/components/link";

const FeaturedWork = ({ state, actions }) => {
  useEffect(() => {
    actions.source.fetch("/category/featured");
  }, []);

  // Get the data of the current list.
  // const data = state.source.get(state.router.link);
  const data = state.source.get("/category/featured");

  if (data.isCategory) {
    const category = state.source.category[data.id];

    const posts = data.items.map(({ type, id }) => state.source[type][id]);

    return (
      <Item>
        <TitleH1>{category.name}</TitleH1>
        {posts.slice(0, 4).map((p) => (
          <Link link={p.link} key={p.id}>
            {p.title.rendered}
          </Link>
        ))}
      </Item>
    );
  }

  return null;
};

export default connect(FeaturedWork);

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
