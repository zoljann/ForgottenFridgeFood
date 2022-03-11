import React from "react";
import MainContainer from "./navigation/MainContainer";
import { ThemeProvider } from "styled-components";
//Import theme
import { theme } from "./themes/theme";
//Import fonts
import { useFonts } from "expo-font";
//loading screen in case font are not loaded
import AppLoading from "expo-app-loading";

const App = () => {
  const fonts = {
    GothicRegular: require("./assets/fonts/DidactGothic-Regular.ttf"),
  };
  const [isLoaded] = useFonts(fonts);
  if (!isLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <MainContainer />
    </ThemeProvider>
  );
};

export default App;
