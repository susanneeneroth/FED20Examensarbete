import { connect, styled } from "frontity";
import Link from "./link";

/**
 * One level menu (no child menus)
 */
const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  // console.log('ITEMS:',items)
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

/**
 * Drop down menu
 */
// const Nav = ({ state }) => {
//   const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
//   // console.log('ITEMS:',items)
//   return (
//     <NavContainer>
//       {items.map((item) => {
//         if (!item.child_items) {
//           return (
//             <NavItem key={item.ID}>
//               <Link link={item.url}>{item.title}</Link>
//             </NavItem>
//           );
//         } else {
//           const childItems = item.child_items;
//           return (
//             <NavItemWithChild key={item.ID}>
//               <NavItem>
//                 <Link link={item.url}>{item.title}</Link>
//               </NavItem>
//               <ChildMenu>
//                 {childItems.map((childItem) => {
//                   return (
//                     <NavItem key={childItem.ID}>
//                       <Link link={childItem.url}>{childItem.title}</Link>
//                     </NavItem>
//                   );
//                 })}
//               </ChildMenu>
//             </NavItemWithChild>
//           );
//         }
//       })}
//     </NavContainer>
//   );
// };

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
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

/* Drop down child menu, need to add drop down css */

// const NavItemWithChild = styled.div`
//   background: pink;
// `;

// const ChildMenu = styled.div`
//   left: 0;
//   background-color: lightblue;
//   width: 100%;
//   z-index: 1;
// `;
