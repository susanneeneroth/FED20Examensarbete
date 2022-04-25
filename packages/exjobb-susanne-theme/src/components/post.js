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
  console.log("fmediaId", fmediaId);

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
        <FeaturedMedia id={post.featured_media} />
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
  padding-top: 30px;
  color: #cbe4f5;
  padding: 10px 0 20px 0;
  /* background-color: pink; */
`;

const PostContent = styled.div`
  height: auto;
  width: 840px;
  margin: auto;
`;

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;
  color: #001827;

  & > p {
    margin: 0;
  }
`;

export default connect(Post);
