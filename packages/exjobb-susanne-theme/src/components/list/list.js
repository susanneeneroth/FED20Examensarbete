import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import ImagePlaceholder from "../../assets/image_placeholder_small.png";

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const Excerpt = libraries.html2react.Component;

  return (
    <ItemsContainer>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return (
          <Item key={item.id}>
            <img src={ImagePlaceholder} />
            <Link key={item.id} link={post.link}>
              <h2>{post.title.rendered}</h2>
              <StyledExcerpt>
                <Excerpt html={post.excerpt.rendered} />
              </StyledExcerpt>
            </Link>
          </Item>
        );
      })}
      <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous);
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next);
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
    </ItemsContainer>
  );
};

export default connect(List);

const ItemsContainer = styled.div`
  width: 1020px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  padding-top: 50px;
  padding-bottom: 30px;

  /* background-color: pink; */

  @media (max-width: 560px) {
    max-width: 500px;
    gap: 0;
    justify-content: center;
  }

  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: black;
    text-decoration: none;
  }

  & > a:visited {
    color: black;
  }

  h2 {
    color: #1ba098;
    font-family: "pacifico";
    margin-left: 10px;
  }
`;

const Item = styled.div`
  box-sizing: border-box;
`;

const StyledExcerpt = styled.div`
  color: #cbe4f5;
  max-width: 312px;

  p {
    margin-left: 10px;
  }
`;

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`;
