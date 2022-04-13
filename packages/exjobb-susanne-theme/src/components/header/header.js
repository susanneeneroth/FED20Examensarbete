import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "../../components/menu";
import MenuLogo from "../../components/menu-logo";
import ToggleButton from "../../assets/toggle-on-off.png";

const Header = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Container>
      <Navigation>
        {/* <StyledLink link="/"> */}
        <Logo>
          <MenuLogo />
        </Logo>
        {/* <Title>{state.frontity.title}</Title> */}
        {/* </StyledLink> */}

        <Menu>
          <Nav />
        </Menu>

        <Right>
          <img src={ToggleButton} width="20px" />
        </Right>
        <MobileMenu />
      </Navigation>
    </Container>
  );
};

const Container = styled.div`
  width: 1140px;
  max-width: 100%;
  box-sizing: border-box;
  color: #fff;
  background: #06121a;
`;

const Navigation = styled.div`
  width: 1140px;
  max-width: 100%;
  box-sizing: border-box;
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  /* flex: 1; */
  text-align: right;

  @media (max-width: 560px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.div`
  height: 40px;
`;

// const Title = styled.h2`
//   margin: 0;
//   margin-bottom: 16px;
// `;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`;

export default connect(Header);

/* Toggle url text: {state.theme.isUrlVisible ? (
            <>
              Current URL: {state.router.link}
              <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
            </>
          ) : (
            <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
          )} */
