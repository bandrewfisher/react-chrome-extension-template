import React from "react";
import { render } from "react-dom";

const Popup = () => {
  return <h1>React Chrome Extension!</h1>;
};

render(<Popup />, document.getElementById("react-entry"));
