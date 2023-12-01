import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#283149",
    },
    secondary: {
      main: "#404b69",
    },
  },
  spacing: 8,
  customColors: {
    accent: "#00818a",
    light: "#dbedf3",
  },
});

export { theme };
