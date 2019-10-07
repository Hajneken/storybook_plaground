import "storybook-addon-jsx/register";
import "@storybook/addon-knobs/register";

// show SASS, HTML, TypeScript etc., more - https://github.com/SOFTVISION-University/storybook-addon-code
import * as CodeAddon from "../src/register";

CodeAddon.setTabs([
  { label: "Sass", type: "sass" },
  { label: "HTML", type: "html" },
  { label: "JavaScript", type: "javascript" }
]);
