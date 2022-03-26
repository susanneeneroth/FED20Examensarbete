import React from "react";
import { connect, Global, css, Head, styled } from "frontity";
import Switch from "@frontity/components/switch";
import List from "../components/list/list";
import Post from "./post";
import Page from "./page";
import Home from "./home";
import Loading from "./loading";
import Error from "./error";
import Header from "./header/header";
import Footer from "./footer";
import Hero from "./hero";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Container>
        <Global styles={globalStyles} />
        <Head>
          <title>Susanne Eneroth Portfolio</title>
          <meta
            name="description"
            content="Susanne Eneroths portfolio made with React and WordPress"
          />
        </Head>
        <HeadContainer>
          <Header />
        </HeadContainer>
        <Hero />
        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <Home when={data.isHome} />
            <List when={data.isArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
            <Page when={data.isPortfolio} />
            <Error when={data.isError} />
          </Switch>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default connect(Root);

const globalStyles = css`
  html {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    /* overflow-x: hidden; */
    background-color: #001f33;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0;
  position: relative;
  min-height: calc(100vh - 400px);
`;

const HeadContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  background-color: #051622;
  padding: 0;
  width: 100%;
  height: 55px;
  padding: 0 20px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

// const Button = styled.button`
//   background: transparent;
//   border: none;
//   color: #aaa;
//   :hover {
//     cursor: pointer;
//     color: #888;
//   }
// `;
