import { View, ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import {
  Card,
  Text,
  Divider,
  RadioButton,
  Surface,
  IconButton,
  Title,
} from "react-native-paper";
import Header from "../../components/Header";
import { ThemeContext } from "../../Context/ThemeContext";
const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themes = ["default", "dark", "light"];

  return (
    <ScrollView>
      <Header />
      <Card.Content>
        <Title style={styles.title}>Theme</Title>
      </Card.Content>
      <Surface elevation={1} style={styles.surface}>
        {themes.map((t) => {
          return (
            <>
              <Card.Content style={styles.card}>
                <Card.Content style={styles.cardContenet}>
                  <IconButton
                    icon={
                      t === "dark"
                        ? "moon-waning-crescent"
                        : t === "light"
                        ? "sun-compass"
                        : "refresh-auto"
                    }
                  />
                  <Text style={styles.text}>{t} theme</Text>
                </Card.Content>
                <RadioButton
                  value={theme}
                  status={t === theme ? "checked" : "unchecked"}
                  onPress={t !== "default" ? () => toggleTheme(t) : () => {}}
                />
              </Card.Content>
              <Divider />
            </>
          );
        })}
      </Surface>

      <Card.Content>
        <Title style={styles.title}>App Info</Title>
      </Card.Content>
      <Surface style={styles.surface}>
        <Card.Content style={styles.card}>
          <Text style={styles.text}>App Version</Text>
          <Text style={styles.text}>1..0.0</Text>
        </Card.Content>
      </Surface>
      <Card.Content>
        <Title style={styles.title}>Account</Title>
      </Card.Content>
      <Surface style={styles.surface}>
        <Card.Content style={styles.card}>
          <Text style={styles.text}>App Version</Text>
          <Text style={styles.text}>1..0.0</Text>
        </Card.Content>
      </Surface>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  surface: {
    width: "96%",
    borderRadius: 0,
    padding: 4,
    alignSelf: "center",
    margin: 10,
  },
  card: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },
  cardContenet: { alignItems: "center", flexDirection: "row" },
  title: { fontWeight: "700", fontSize: 16 },
  text: { textTransform: "capitalize", fontWeight: "bold" },
});
export default Settings;
