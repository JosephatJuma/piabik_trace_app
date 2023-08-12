import React from "react";
import { Appbar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
function Header() {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={{ width: "100%" }}>
      <IconButton
        icon="menu"
        size={30}
        onPress={() => navigation.openDrawer()}
      />
      <Appbar.Content title={"Piabik"} />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
}

export default Header;
