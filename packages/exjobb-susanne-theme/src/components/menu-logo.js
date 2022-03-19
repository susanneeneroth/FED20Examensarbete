import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./link";
import MolnGrey from "../assets/moln_grey_small.png";

const MenuLogo = ({ state }) => {
  return (
    <>
      <Link
        link="/"
        alt="logo link home page"
        style={{ textDecoration: "none", color: "orange" }}
      >
        <img src={MolnGrey} />
        <span>{state.frontity.title}</span>
      </Link>
    </>
  );
};

// const LogoTitle = styled.span`
//   color: red;
//   & > a {
//     text-decoration: none;
//   }
//   & > a:visited {
//     text-decoration: none;
//   }
// `;

export default connect(MenuLogo);
