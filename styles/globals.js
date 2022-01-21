import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font: 400 16px Nunito Sans, sans-serif;
    transition: all 0.50s linear;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

  :root {
    --blue: ${(props) => props.theme.colors.blue};
    --green: ${(props) => props.theme.colors.green};
    --yellow: ${(props) => props.theme.colors.yellow};
    --background: ${(props) => props.theme.colors.background};
    --coral: ${(props) => props.theme.colors.coral};
    --text: ${(props) => props.theme.colors.text};
    --box-shadow: ${(props) => props.theme.colors.boxShadow};
  }

  `;