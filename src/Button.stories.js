import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import {withInfo} from "@storybook/addon-info";
import {text, color} from "@storybook/addon-knobs";

// we declare a new Button story within the current module
// then we add() it with desription and callback which is JSX instance of our component
// {
//     info: "test",
//         text: `> markdown supported text`
// }
storiesOf("Button", module)
  .addWithJSX("Red Background", ()=> <Button bg={color('bg', 'red', "color")}>{text("text", "Text", "text")}</Button>, {
      info: `
          description or documentation about my component, supports markdown
        `
  })
  .addWithJSX("Blue Background", () => <Button bg="blue">Blue Button</Button>);
