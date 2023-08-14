import { View, Text } from "react-native";
import React from "react";
import { Appbar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={{ width: "100%" }}>
      <IconButton
        icon="arrow-left"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <Appbar.Content title={title} titleStyle={{ fontWeight: "bold" }} />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default Header;
