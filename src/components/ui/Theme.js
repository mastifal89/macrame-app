import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const red = "#FF0000";
const arcGrey = "#b8b8b8";
const white = "#FFFFFF";
const black = "#000000";

export default createTheme({
  palette: {
    common: {
      white: white,
    },
    primary: {
      main: arcGrey,
    },
    secondary: {
      main: arcOrange,
    },
    error: {
      main: red,
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "monospace",
      fontWeight: 700,
      fontSize: "1.8rem",
      color: black,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "1.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.50rem",
      color: arcBlue,
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "1.5rem",
      color: arcOrange,
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Pacifico",
      fontSize: "0.8rem",
      color: arcOrange,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    body2: {
      fontSize: "0.8rem",
      color: arcGrey,
      fontWeight: 300,
    },
  },
});
