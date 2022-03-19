import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
// import post from "./post";

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const Excerpt = libraries.html2react.Component;

  return (
    <Items>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return (
          <div key={item.id}>
            <Link key={item.id} link={post.link}>
              {post.title.rendered}
              <StyledExcerpt>
                <Excerpt html={post.excerpt.rendered} />
              </StyledExcerpt>
            </Link>
          </div>
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
    </Items>
  );
};

export default connect(List);

const Items = styled.div`
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
`;

const StyledExcerpt = styled.div`
  color: pink;
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
