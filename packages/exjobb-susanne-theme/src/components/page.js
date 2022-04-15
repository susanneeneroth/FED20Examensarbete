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
  padding-top: 30px;
`;

const Content = styled.section`
  height: auto;
  width: 840px;
  margin: auto;
  padding: 10px 0 20px 0;
  color: #869ba9;

  h2 {
    margin-top: 0;
    font-family: "pacifico";
    color: #1ba098;
  }
`;

export default connect(Page);
