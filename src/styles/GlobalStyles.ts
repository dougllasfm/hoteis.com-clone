import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;    
  }
  body {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 16px;
  }
  *, button, input {
    border: 0;
    font-family: system, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
  }
  :root {
    --background: #ffffff;
    --red: #d32f2f;
    --black: #333333;
    --green-1: #15562b;
    --green-2: #218242;
    --green-3: #37cd69;
    --green-4: #74dc97;
    --blue-1: #063665;
    --blue-2: #125ca5;
    --blue-3: #156bc1;
    --blue-4: #5ca8f5;
    --gray: #6e6e6e;
  }
`;