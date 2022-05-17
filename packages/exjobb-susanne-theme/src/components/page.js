import React from "react";
import { connect, styled } from "frontity";

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      {/* <Head>
        <title>{page.title.rendred}</title>
        <meta name="description" content={page.excerpt.rendered} />
      </Head> */}
      <Content>
        <h2>{page.title.rendered}</h2>
        <Html2React html={page.content.rendered} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #001f33;
  height: auto;
  width: 1140px;
  color: #cbe4f5;
  padding: 30px 0 40px 0;
`;

const Content = styled.section`
  height: auto;
  width: 840px;
  margin: auto;
  color: #869ba9;

  h2 {
    text-align: center;
    /* margin-top: 40px; vid bild */
    margin-bottom: 5px;
    font-family: "pacifico";
    color: #1ba098;
  }

  @media (max-width: 560px) {
    max-width: 500px;
  }
`;

export default connect(Page);
