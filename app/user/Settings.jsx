import { View, ScrollView } from "react-native";
import React, { useContext } from "react";
import { Card, Text, Switch } from "react-native-paper";
import Header from "../../components/Header";
import { ThemeContext } from "../..";
const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const onToggleSwitch = () => {
    toggleTheme();
  };

  return (
    <ScrollView>
      <Header />
      <Card style={{ borderRadius: 0 }}>
        <Card.Content
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Change to {theme === "dark" ? "light" : "dark"} theme</Text>

          <Switch
            value={theme === "dark" ? true : false}
            onValueChange={onToggleSwitch}
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default Settings;
