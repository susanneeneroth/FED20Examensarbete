const settings = {
  name: "frontity",
  state: {
    frontity: {
      url: "http://localhost:10023",
      title: "Susanne Eneroth - Front End Dev",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "sus-theme",
      state: {
        theme: {
          menu: [],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://localhost:10023",
          homepage: "/start",
          postsPage: "/blog",
          params: {
            per_page: 10,
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
