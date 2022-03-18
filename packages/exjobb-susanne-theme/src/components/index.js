import React from "react";
import { connect, Global, css, Head } from "frontity";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Home from "./home";
import Loading from "./loading";
import Error from "./error";
import Header from "./header/header";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global
        styles={css`
          * {
            margin-top: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
            margin: 0;
          }
          body {
            margin: 0;
          }
          h1 {
            margin-top: 0;
          }
        `}
      />
      <Head>
        <title>Susanne Eneroth Portfolio</title>
        <meta
          name="description"
          content="Susanne Eneroths portfolio made with React and WordPress"
        />
      </Head>
      <Header />
      <main>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isHome} />
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Page when={data.isPortfolio} />
          <Error when={data.isError} />
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);

// const Button = styled.button`
//   background: transparent;
//   border: none;
//   color: #aaa;
//   :hover {
//     cursor: pointer;
//     color: #888;
//   }
// `;
