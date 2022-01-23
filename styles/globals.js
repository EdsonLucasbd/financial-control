import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font: 400 16px Nunito Sans, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

  :root {
    --blue: ${({ theme }) => theme.colors.blue};
    --link-hover: ${({ theme }) => theme.colors.linkHover};
    --green: ${({ theme }) => theme.colors.green};
    --yellow: ${({ theme }) => theme.colors.yellow};
    --background: ${({ theme }) => theme.colors.background};
    --background-header: ${({ theme }) => theme.colors.backgroundHeader};
    --coral: ${({ theme }) => theme.colors.coral};
    --text: ${({ theme }) => theme.colors.text};
    --box-shadow: ${({ theme }) => theme.colors.boxShadow};
  }

  `;