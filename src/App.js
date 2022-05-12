import React from "react";
import theme from "./components/ui/Theme";
import { AppRouter } from "./routers/AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import 'animate.css';

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};
