const settings = {
  name: "fed20-exjobb",
  state: {
    frontity: {
      url: "https://susanneeneroth.se/",
      title: "Susanne Eneroth",
      description: "",
    },
  },
  packages: [
    {
      name: "exjobb-susanne-theme",
      state: {
        theme: {
          menu: [],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://susanneeneroth.se/",
          postTypes: [
            {
              type: "more-work",
              endpoint: "more-work",
              archive: "/portfolio-archive",
            },
          ],
          postsPage: "Blog",
          params: {
            per_page: 10,
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
  ],
};

export default settings;
