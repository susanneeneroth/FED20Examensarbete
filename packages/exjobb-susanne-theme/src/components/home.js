import React from "react";
import { connect } from "frontity";
import Switch from "@frontity/components/switch";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Error from "./error";

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <div>
      <h1>Homepage</h1>
      <Switch>
        <Loading when={data.isFetching} />
        <Post when={data.isPost} />
        <Page when={data.isPage} />
        <Page when={data.isPortfolio} />
        <Error when={data.isError} />
      </Switch>
    </div>
  );
};

export default connect(Home);
