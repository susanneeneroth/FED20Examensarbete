import server from "@frontity/core/src/server";
import exjobb_susanne_theme_default from "exjobb-susanne-theme/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";
import aamodtgroup__frontity_contact_form_7_default from "@aamodtgroup/frontity-contact-form-7/src/index";

const packages = {
  exjobb_susanne_theme_default,
  frontity__wp_source_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
  aamodtgroup__frontity_contact_form_7_default,
};

export default server({ packages });

