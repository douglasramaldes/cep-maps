import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  body, html {
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 5px
  }
`;

export default GlobalStyle;
