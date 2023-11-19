import { montserrat } from "./theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html {
    font-family: ${montserrat.style.fontFamily}, sans-serif;
  };

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray[300]};
    -webkit-font-smoothing: antialiased;
  };

  body, input, button, textarea {
    font-size: 1.6rem;
    outline: none;
  };

  a {
    text-decoration: none;
  };

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  };

  button:hover, a:hover {
    filter: brightness(.9);
  };

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  };

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[100]};
  };

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.blue};
    border-radius: 8px;
  };
`;

export default GlobalStyle;