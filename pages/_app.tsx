import "../styles/globals.css";
import { GlobalProvider } from "state";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { theme } from "theme";

const App: React.FC<{ Component: React.FC; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
