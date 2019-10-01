import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

// we declare a new Button story within the current module
// then we add() it with desription and callback which is JSX instance of our component
storiesOf("Button", module)
  .add("Red Background", () => <Button bg="red">Red button</Button>, {
    info: "test",
    text: `> markdown supported text`
  })
  .add("Blue Background", () => <Button bg="blue">Blue Button</Button>);
