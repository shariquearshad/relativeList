import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Movie1 from "./movie1";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <App />
    <Movie1 />
  </>,
  rootElement
);
