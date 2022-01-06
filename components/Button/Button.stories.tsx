import React from "react";

import Button from "./Button";

export default {
  component: Button,
};

export const Primary = (args) => (
  <Button {...args} onClick={() => {}}>
    Button
  </Button>
);
Primary.args = {
  primary: true,
};
