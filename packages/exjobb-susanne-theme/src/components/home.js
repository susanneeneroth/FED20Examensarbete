import React from "react";
import { connect, styled } from "frontity";
import Switch from "@frontity/components/switch";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Error from "./error";

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <HomeContainer>
      <StyledTitle>Featured Work</StyledTitle>
      {/* <Switch>
        <Loading when={data.isFetching} />
        <Post when={data.isPost} />
        <Page when={data.isPage} />
        <Page when={data.isPortfolio} />
        <Error when={data.isError} />
      </Switch> */}
    </HomeContainer>
  );
};

export default connect(Home);

const StyledTitle = styled.h1`
  color: #1ba098;
  font-family: "pacifico";
`;

const HomeContainer = styled.div`
  background-color: #001f33;
  min-height: 100vh;
  width: 100vw;
  text-align: center;
`;
