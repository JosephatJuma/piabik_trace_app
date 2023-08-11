import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Home Screens</Text>
        <StatusBar style="auto" />
      </View>
    );
  };
  const UserScreen = () => {
    return (
      <View style={styles.container}>
        <Text>User Screens</Text>
        <StatusBar style="auto" />
      </View>
    );
  };
  function HomeTabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="PiabikR=TraceIt" component={HomeTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
