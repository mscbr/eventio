import { createGlobalStyle } from 'styled-components';
import theme from 'themming';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.palette.surface};
  }
`;

export default GlobalStyle;
