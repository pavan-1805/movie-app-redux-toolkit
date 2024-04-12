import React from "react";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./features/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("PAVAN");
root.render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>
);
