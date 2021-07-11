import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import "modern-normalize/modern-normalize.css";
import "./index.css";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
