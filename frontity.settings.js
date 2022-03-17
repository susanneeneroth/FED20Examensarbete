const settings = {
  name: "fed20-exjobb",
  state: {
    frontity: {
      url: "http://localhost:10023",
      title: "Susanne Eneroth",
      description: "",
    },
  },
  packages: [
    "@frontity/tiny-router",
    "@frontity/wp-source",

    {
      name: "exjobb-susanne-theme",
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
          postTypes: [
            {
              type: "portfolio",
              endpoint: "portfolio",
              // archive: "/portfolio-archive",
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
  ],
};

export default settings;
