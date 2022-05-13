import React from "react";
import { connect, Head, styled } from "frontity";
import dayjs from "dayjs";
import FeaturedMedia from "./featured-media";
import List from "./list";

const Post = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const Html2React = libraries.html2react.Component;
  const fmediaId = post.featured_media;

  // Prefetch home posts and the list component.
  actions.source.fetch("/");
  List.preload();

  const formattedDate = dayjs(post.date).format("YYYY-MM-DD");

  return (
    <PostContainer>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <PostContent>
        <FeaturedMedia id={fmediaId} />
        <h2>{post.title.rendered}</h2>
        <PostInfo>
          <p>Posted: {formattedDate}</p>
          <p>Author: {author.name}</p>
        </PostInfo>
        <Html2React html={post.content.rendered} />
      </PostContent>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  height: auto;
  width: 1140px;
  color: #cbe4f5;
  padding: 30px 0 40px 0;
`;

const PostContent = styled.div`
  height: auto;
  width: 840px;
  margin: auto;

  h2 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 5px;
    font-family: "pacifico";
    color: #1ba098;
  }
`;

const PostInfo = styled.div`
  margin-bottom: 1em;
  padding: 0.5em;
  font-size: 0.8em;
  font-style: italic;
  color: #cbe4f5;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 40px;

  & > p {
    margin: 0;
  }
`;

export default connect(Post);
