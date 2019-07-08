import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ isMenuOpen: boolean }>`
  html {
    box-sizing: border-box;
    font-family: ${p => p.theme.fonts.sans};
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
    background: ${p => p.theme.headerBg};
    color: ${p => p.theme.textColor};
    margin: ${p => p.theme.space[0]};
    ${p => (p.isMenuOpen ? 'overflow: hidden;' : '')}
    transition:
      background ${p => p.theme.transition},
      color ${p => p.theme.transition};
  }
`;

export default GlobalStyle;
