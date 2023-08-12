import React from "react";
import { Appbar, IconButton, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
function Header() {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <IconButton
        icon="menu"
        size={30}
        onPress={() => navigation.openDrawer()}
      />
      <Appbar.Content />

      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
}

export default Header;
