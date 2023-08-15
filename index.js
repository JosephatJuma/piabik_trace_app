import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PaperProvider, DefaultTheme, MD3DarkTheme } from "react-native-paper";
import App from "./App";

//context
import { ThemeContext } from "./Context/ThemeContext";
import { UserContext } from "./Context/ThemeContext";

function Main() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  const toggleTheme = (newTheme) => {
    if (newTheme === theme) {
      return;
    }
    setTheme(newTheme);
  };

  const getData = async () => {
    //await AsyncStorage.removeItem("profile");
    await AsyncStorage.getItem("user").then((result) => {
      const data = JSON.parse(result);
      setUser(data);
    });
  }; //Fetching data
  useEffect(() => {
    getData();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <PaperProvider theme={theme === "dark" ? MD3DarkTheme : DefaultTheme}>
          <StatusBar
            style={theme === "dark" ? "light" : "dark"}
            backgroundColor={theme === "dark" ? "black" : "white"}
          />
          <App />
        </PaperProvider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

registerRootComponent(Main);
