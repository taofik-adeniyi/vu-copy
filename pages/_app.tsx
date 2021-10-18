import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { myTheme } from "./theme/my-theme";
import { MyGlobalStyle } from "./global-styles";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
  media: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px'
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <MyGlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
