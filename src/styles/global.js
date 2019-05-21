import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: #f5f5f0;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialised !important;
  font-family: sans-serif;
}

`;
