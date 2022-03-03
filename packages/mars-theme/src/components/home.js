import React from "react";
import Switch from "@frontity/components/switch";
import Loading from "./loading";
import Post from "./post";
import PageError from "./page-error";
import Page from "./page";
import { connect } from "frontity";

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <div>
      <h1>Home ttrlalla</h1>
      <Switch>
        <Loading when={data.isFetching} />
        <Post when={data.isPostType} />
        <Page when={data.isPage} />
        <PageError when={data.isError} />
      </Switch>
    </div>
  );
};

export default connect(Home);
