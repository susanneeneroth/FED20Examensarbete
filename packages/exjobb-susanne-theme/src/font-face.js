import React from "react";
import { css, Global, connect } from "frontity";
import Pacifico from "./fonts/Pacifico-Regular.ttf";

const fonts = {
  all: [Pacifico],
};

const FontFace = ({ state }) => {
  const font = fonts[state.theme.fontSets] || fonts["all"];

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Pacifico";
          font-family: pacifico, sans-serif;
          font-weight: 300;
          font-style: normal;
          src: url(${Pacifico}) format("ttf");
        }
      `}
    />
  );
};

export default connect(FontFace);
