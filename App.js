import React from "react";
import MainContainer from "./navigation/MainContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <MainContainer />
  </ThemeProvider>
);

export default App;
