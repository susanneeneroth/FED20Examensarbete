import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import molnGrey from "../assets/moln_grey_small.png";

const Header = ({ state }) => {
  const Comp = () => <img src={molnGrey} alt="Image alt" />;

  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>
            <span>
              <Logo src={molnGrey} />
            </span>
            {state.frontity.title}
          </Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

export const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Pacifico";
  font-size: 0.8rem;
  font-weight: thin;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  color: #869ba9;
`;

export const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.img`
  background-image: url(${molnGrey});
  margin-right: 5px;
  position: relative;
  top: 2px;
`;
