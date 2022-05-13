// Code snippets

// Separat länk för Home om inte menyn funkar
{
  /* <Link
        link="/"
        css={css`
          color: orange;
          text-decoration: none;
          margin-right: 1em;
        `}
      >
        Home
      </Link> */
}

<MenuContent as="nav">
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
</MenuContent>;

// From header.js
//<Container isPostType={data.isPostType} isPage={data.isPage}>
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

// Form styling
// label {
//   color: rgb(45, 65, 82);
//   width: 100%;
// }

// textarea {
//   width: 100%;
//   resize: none;
// }

// span.wpcf7-form-control-wrap {
//   margin-bottom: 20px;
//   width: 100%;
//   display: inline-block;
// }
// .wpcf7-form-control {
//   width: 100%;
//   padding: 12px;
//   background-color: #eef2fd;
//   border: 1px solid #eef2fd;
// }

// input.wpcf7-form-control.wpcf7-submit {
//   width: auto;
//   padding: 8px 32px;
// }
