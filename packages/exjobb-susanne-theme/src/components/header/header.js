import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MenuLogo from "../header/menu-logo";

const Header = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Container>
      <Navigation>
        <Left>
          {/* <StyledLink link="/"> */}
          <Logo>
            <MenuLogo />
          </Logo>
          {/* </StyledLink> */}
        </Left>
        <Middle>
          <Menu>
            <Nav />
          </Menu>
        </Middle>
        <Right>Right</Right>
        {/* <MobileMenu /> */}
      </Navigation>
    </Container>

    // <Container isPostType={data.isPostType} isPage={data.isPage}>
    //   <LogoTitle>
    //     <span>
    //       <Logo src={molnGrey} />
    //     </span>
    //     {state.frontity.title}
    //   </LogoTitle>
    //   <HeaderContent>
    //     <h1>The exjobb - work in progress</h1>
    //     <Menu>
    //       <Nav />
    //     </Menu>
    //   </HeaderContent>
    // </Container>
  );
};

const Container = styled.header`
  background-color: #ccc;
  width: 100vw;
  height: 200px;

  h1 {
    color: #081521;
  }
`;

const Navigation = styled.div`
  display: flex;
  min-height: 56px;
  background-color: pink;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  text-align: left;
  background-color: peachpuff;
`;

const Middle = styled.div`
  flex: 1;
  text-align: center;
  background-color: powderblue;
`;

const Right = styled.div`
  flex: 1;
  text-align: right;
  background-color: green;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.div`
  height: 40px;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: 0 auto;

  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
`;

const LogoTitle = styled.span`
  margin: 0;
  margin-bottom: 16px;
  color: #869ba9;
  flex: 1;
`;

// const Logo = styled.img`
//   margin-right: 5px;
//   position: relative;
//   top: 2px;
// `;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
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
