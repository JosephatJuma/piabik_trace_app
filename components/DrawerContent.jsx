import React from "react";
import { Drawer } from "react-native-paper";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

const DrawerContent = () => {
  const [active, setActive] = React.useState("Home");
  const screens = ["Home", "User"];
  const navigation = useNavigation();
  const handleNavigation = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };
  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      {screens.map((screen, index) => {
        return (
          <Drawer.Item
            key={index}
            label={screen}
            active={active === screen}
            onPress={() => handleNavigation(screen)}
            icon={<Octicons name="home" size={24} color="black" />}
          />
        );
      })}
    </View>
  );
};

export default DrawerContent;
