import React from "react";
import { connect, Global, css, styled } from "frontity";
import Nav from "../components/nav";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";

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
      <Header>
        <HeaderContent>
          <h1>Frontity workshop</h1>
          <p>Current URL: {state.router.link}</p>
          <Menu>
            <Nav />
          </Menu>
        </HeaderContent>
      </Header>
      <main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  background-color: #ccc;

  h1 {
    color: #081521;
  }
`;

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: 0 auto;

  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`;
