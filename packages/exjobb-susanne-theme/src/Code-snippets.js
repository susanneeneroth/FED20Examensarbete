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
