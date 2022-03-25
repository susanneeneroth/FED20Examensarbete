import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 *
 * Featured work posts on home page
 */

const ListItemFrontpage = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <Content>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </Content>
  );
};

export default connect(ListItemFrontpage);

const Content = styled.article`
  max-width: 300px;
  height: 500px;
  background-color: pink;
  padding-right: 25px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;

// const AuthorName = styled.span`
//   color: rgba(12, 17, 43, 0.9);
//   font-size: 0.9em;
// `;

// const StyledLink = styled(Link)`
//   padding: 15px 0;
// `;

// const PublishDate = styled.span`
//   color: rgba(12, 17, 43, 0.9);
//   font-size: 0.9em;
// `;
