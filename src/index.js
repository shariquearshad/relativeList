import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Movie1 from "./movie1";
import Movie2 from "./movie2";
import Movie3 from "./movie3";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <App />
    <Movie1 />
    <Movie2 />
    <Movie3 />
  </>,
  rootElement
);
