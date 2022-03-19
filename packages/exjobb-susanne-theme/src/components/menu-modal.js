import { styled, connect } from "frontity";
import Link from "./link";

/**
 * The modal containing the mobile menu items.
 *
 * @param props - The props passed to the component from parent.
 * @returns A React component.
 */
const MenuModal = ({ state, ...props }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  return (
    <div {...props}>
      {state.frontity.mode !== "amp" && <MenuOverlay />}

      <MenuContent as="nav">
        {items.map((item) => {
          return (
            <MenuLink key={item.ID} link={item.url}>
              {item.title}
            </MenuLink>
          );
        })}
      </MenuContent>
    </div>
  );
};

const MenuOverlay = styled.div`
  background-color: pink;
  width: 100vw;
  height: 100vh;
  overflow: hidden hidden;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: relative;
  top: 70px; /* iphone 11 */
  right: 75vw;
  margin: 0 auto;
  overflow: hidden;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  color: #000;
  text-decoration: none;
  width: 30vw;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: black;
    font-weight: bold;
  }
`;

export default connect(MenuModal);
