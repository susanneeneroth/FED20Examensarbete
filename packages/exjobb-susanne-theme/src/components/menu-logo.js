import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./link";
import MolnGrey from "../assets/moln_grey_small.png";

const MenuLogo = ({ state }) => {
  return (
    <LogoContainer>
      <Link link="/" alt="logo link home page">
        <img src={MolnGrey} />
        <TitleName>{state.frontity.title}</TitleName>
      </Link>
    </LogoContainer>
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

// const StyledLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
// `;

const LogoContainer = styled.div`
  margin-top: 5px;
`;

const TitleName = styled.span`
  position: relative;
  bottom: 4px;
  margin-left: 5px;
  font-family: "Pacifico";
  color: #869ba9;
`;
