import React, { useContext } from "react";
import {
  Divider,
  List,
  IconButton,
  Title,
  Text,
  Card,
} from "react-native-paper";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../Context/ThemeContext";
const DrawerContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = React.useState("Home");
  const screens = [
    { name: "Home", icon: "home", title: "Home" },
    { name: "User", icon: "account", title: "Profile" },
    { name: "Post", icon: "plus-box", title: "Post Item" },
    { name: "Search", icon: "magnify", title: "Search" },
    { name: "Settings", icon: "cog", title: "Settings" },
  ];
  const navigation = useNavigation();
  const handleNavigation = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };
  const handleToggleTheme = () => {
    theme === "light" ? toggleTheme("dark") : toggleTheme("light");
    navigation.goBack();
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: 100,
      }}
      contentContainerStyle={{
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      }}
    >
      <Card.Content>
        <Title style={{ fontWeight: "bold" }}>Piabik Trace Document</Title>
        <Divider />
      </Card.Content>
      <Card.Content style={{ width: "100%" }}>
        {screens.map((screen, index) => {
          return (
            <List.Item
              key={index}
              title={
                <Title style={{ fontWeight: "bold" }}>{screen.title}</Title>
              }
              active={active === screen.name}
              onPress={() => handleNavigation(screen.name)}
              left={() => <List.Icon icon={screen.icon} size={24} />}
              style={{ padding: 10, width: "100%" }}
            />
          );
        })}

        <Divider />
      </Card.Content>
      <IconButton
        icon="theme-light-dark"
        size={40}
        onPress={handleToggleTheme}
        style={{ margin: 16, right: 0, bottom: 0 }}
      />
      <Card.Content>
        <Text>V 1.0.0</Text>
      </Card.Content>
    </ScrollView>
  );
};

export default DrawerContent;
