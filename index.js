import React, { useState } from "react";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import {
  PaperProvider,
  DefaultTheme,
  MD2DarkTheme,
  MD3DarkTheme,
  MD2LightTheme,
} from "react-native-paper";
import App from "./App";
import { ThemeContext } from "./Context/ThemeContext";
import { StatusBar } from "expo-status-bar";

function Main() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  const toggleTheme = (newTheme) => {
    if (newTheme === theme) {
      return;
    }
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <PaperProvider theme={theme === "dark" ? MD3DarkTheme : DefaultTheme}>
        <StatusBar
          style={theme === "dark" ? "light" : "dark"}
          backgroundColor={theme === "dark" ? "black" : "white"}
        />
        <App />
      </PaperProvider>
    </ThemeContext.Provider>
  );
}

registerRootComponent(Main);
