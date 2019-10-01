import React from "react";

//simple react component
export const Button = ({ bg, children }) => (
  <button style={{ backgroundColor: bg }}>{children}</button>
);
