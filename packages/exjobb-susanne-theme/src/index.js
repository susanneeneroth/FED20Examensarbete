import Root from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler";

const exjobbSusanneTheme = {
  name: "exjobb-susanne-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      isUrlVisible: false,
      menu: ["primary-menu"],
      menuUrl: "primary-menu",
      isMobileMenuOpen: false,
      featured: {
        showOnList: true,
        showOnPost: true,
      },
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible;
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
        await actions.source.fetch("/contact-footer");
      },
      beforeCSR: () => {
        import("webfontloader").then((WebFontLoader) => {
          WebFontLoader.load({
            google: {
              families: ["Pacifico", "Quicksand", "Satisfy"],
            },
          });
        });
      },
    },
  },
  libraries: {
    html2react: {
      processors: [image, iframe, link],
    },
    source: {
      handlers: [menuHandler],
    },
  },
};

export default exjobbSusanneTheme;
