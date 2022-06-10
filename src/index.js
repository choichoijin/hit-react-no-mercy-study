import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Slider from "./Slider";
import reportWebVitals from "./reportWebVitals";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'GimhaeGayaB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/GimhaeGayaB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Slider />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
