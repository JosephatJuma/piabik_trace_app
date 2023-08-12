import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import DrawerContent from "./components/DrawerContent";
//import screens
import Home from "./app/home/Home";
import Profile from "./app/user/Profile";
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const HomeScreen = () => {
    return <Home />;
  };
  const UserScreen = () => {
    return <Profile />;
  };
  function HomeTabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "User") {
              iconName = focused ? "user" : "user";
            } else if (route.name === "AddTask") {
              iconName = focused ? "ios-add-circle" : "ios-add-outline";
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#800080",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Drawer.Navigator
        drawerContent={DrawerContent}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="PiabikTraceIt" component={HomeTabNavigator} />
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
