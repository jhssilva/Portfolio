import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
  position: positions.TOP_CENTER,
  timeout: 2000,
  offset: "30px",
  transition: transitions.SCALE,
};

root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);
