import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(63, 80, 181)",
      light: "#FEE1C7",
    },
    secondary: {
      main: "#D2D6EF",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
        },
        p: {
          margin: 0,
        },
      },
    },
  },
});

export default theme;
