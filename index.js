import React, { useContext, createContext, useState } from "react";
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

import { StatusBar } from "expo-status-bar";
export const ThemeContext = createContext();

function Main() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
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
