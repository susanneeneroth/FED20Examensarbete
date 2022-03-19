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
