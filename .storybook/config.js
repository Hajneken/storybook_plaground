import {addDecorator, configure, setAddon} from "@storybook/react";

import JSXAddon from 'storybook-addon-jsx';
import {withInfo} from "@storybook/addon-info";
import { withKnobs } from '@storybook/addon-knobs/react';

//pair together setAddon with JSXAddon
setAddon(JSXAddon);

addDecorator(withInfo);
addDecorator(withKnobs);

// looks through everything in src and uses regex for everything that ends with .stories.js
const req = require.context("../src", true, /.stories.js$/);

/*
we require every file that matches regex /.stories.js$/
+ welcomeStory, sequentially before other files
 */
function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
