import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - FeaturedMedia: the featured image/video of the post
 * - excerpt
 */
const ListItemFeatured = ({ state, item }) => {
  return (
    <FlexItem>
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      <Link link={item.link}>
        <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </FlexItem>
  );
};

export default connect(ListItemFeatured);

const Excerpt = styled.div`
  line-height: 1.6em;
  color: #cbe4f5;
  text-align: center;
  margin-top: 20px;
`;

const FlexItem = styled.div`
  color: #cbe4f5;
  text-align: center;
  margin-top: 20px;

  h2 {
    font-family: "pacifico";
    color: #1ba098;
    text-align: left;
    margin-left: 20px;
  }

  h2:hover {
    color: #1ba098;
  }

  p {
    text-align: left;
    margin-left: 25px;
  }

  img {
    border-radius: 2px;
    width: 520px;
    height: 370px;
  }
`;
