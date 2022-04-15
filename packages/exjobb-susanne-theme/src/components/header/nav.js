import React from "react";
import { connect, styled } from "frontity";
// import Link from "./link";
import Link from "@frontity/components/link";
import { css } from "frontity";

const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  return (
    <NavContainer>
      {items.map((item) => {
        return (
          <NavItem key={item.ID}>
            <Link link={item.url}>{item.title}</Link>
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  justify-content: right;
  background-color: #051622;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #1ba098;
  font-size: 0.9em;
  box-sizing: border-box;
  display: inline;
  font-family: "Pacifico";

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
