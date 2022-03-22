import React from "react";
import { connect, styled } from "frontity";
import Switch from "@frontity/components/switch";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Error from "./error";
import FeaturedWork from "./featured-work";

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <HomeContainer>
      <FeaturedWork />
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

const HomeContainer = styled.div`
  background-color: #001f33;
  height: auto;
  width: 100vw;
  padding-top: 30px;
`;
