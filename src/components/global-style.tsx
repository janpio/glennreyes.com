import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${p => p.theme.fonts.sans};
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: ${p => p.theme.bg};
    margin: ${p => p.theme.space[0]};
    transition: ${p => p.theme.transition};
  }
`;

export default GlobalStyle;
