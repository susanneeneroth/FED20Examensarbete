import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
// import Link from "@frontity/components/link";
import { css } from "frontity";

const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  return (
    <Menu>
      {items.map((item) => {
        return (
          <nav key={item.ID}>
            <Link
              link={item.url}
              css={css`
                color: orange;
                text-decoration: none;
                margin-right: 1em;
              `}
            >
              {item.title}
            </Link>
          </nav>
        );
      })}
    </Menu>
  );
};

export default connect(Nav);

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
`;
