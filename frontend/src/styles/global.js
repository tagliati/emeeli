import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  a {
    text-decoration: none;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
