import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const Root = ({ state }) => {
  return (
    <>
      <h1>Frontity workshop</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <Link link="/page/2">More posts</Link>
        <Link link="/about-us">About us</Link>
      </nav>
    </>
  );
};

export default connect(Root);
