import React, { useContext } from "react";
import { Appbar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "..";
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <Appbar.Header
      style={{
        width: "100%",
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      <IconButton
        icon="menu"
        size={30}
        onPress={() => navigation.openDrawer()}
      />
      <Appbar.Content title={"Piabik"} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
}

export default Header;
