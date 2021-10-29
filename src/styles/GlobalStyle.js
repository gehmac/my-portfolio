import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #5469c5;
    --primary-color-dark: #1E2545;
    --secondary-color: #6C757d;
    --background-dark-color: #10121A;
    --background-dark-color-2: #333;
    --border-color: #2e344e;
    --background-light-color: #f1f1f1;
    --white-color: #ffffff;
    --font-lighr-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-size: 1.2rem;
  }

  body {
    background-color: var(--background-dark-color-2);
    color: var(--font-light-color)
  }
`;

export default GlobalStyle;
