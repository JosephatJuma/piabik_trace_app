import React, { useContext } from "react";
import {
  Divider,
  List,
  IconButton,
  Title,
  Text,
  Card,
} from "react-native-paper";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "..";
const DrawerContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = React.useState("Home");
  const screens = [
    { name: "Home", icon: "home", title: "Home" },
    { name: "User", icon: "account", title: "Profile" },
    { name: "Settings", icon: "cog", title: "Settings" },
  ];
  const navigation = useNavigation();
  const handleNavigation = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };
  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <Title>TraceDoc</Title>
      <Divider />
      {screens.map((screen, index) => {
        return (
          <List.Item
            key={index}
            title={<Title>{screen.title}</Title>}
            active={active === screen.name}
            onPress={() => handleNavigation(screen.name)}
            left={() => <List.Icon icon={screen.icon} size={24} />}
          />
        );
      })}

      <Divider />
      <IconButton
        icon="theme-light-dark"
        size={40}
        onPress={toggleTheme}
        style={{ margin: 16, right: 0, bottom: 0 }}
      />
      <Card.Content>
        <Text>V 1.0.0</Text>
      </Card.Content>
    </View>
  );
};

export default DrawerContent;
