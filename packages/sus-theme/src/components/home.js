import React from "react";
import Switch from "@frontity/components/switch";
import Loading from "./loading";
import Post from "./post";
import PageError from "./page-error";
import Page from "./page";

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <div>
      <Switch>
        <Loading when={data.isFetching} />
        <Post when={data.isPostType} />
        <Page when={data.isPage} />
        <PageError when={data.isError} />
      </Switch>
    </div>
  );
};

export default Home;
