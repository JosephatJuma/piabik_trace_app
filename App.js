import React, { useContext } from "react";
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
import { ThemeContext } from ".";
//import screens
import Home from "./app/home/Home";
import Profile from "./app/user/Profile";
import Settings from "./app/user/Settings";
import Post from "./app/post/Post";
import PostLost from "./app/post/lostItems/PostLost";
import PostFound from "./app/post/foundItems/PostFound";
import FollowUp from "./app/post/followup/FollowUp";
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const { theme } = useContext(ThemeContext);

  const HomeScreen = () => {
    return <Home />;
  };
  const PostScreen = () => {
    return <Post />;
  };
  const UserScreen = () => {
    return <Profile />;
  };
  const PostLostScreen = () => {
    return <PostLost />;
  };
  const PostFoundScreen = () => {
    return <PostFound />;
  };
  const FollowUpScreen = () => {
    return <FollowUp />;
  };
  const SettingsScreen = () => {
    return <Settings />;
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
            } else if (route.name === "Post") {
              iconName = focused ? "addfile" : "addfile";
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme === "dark" ? "white" : "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        drawerContent={DrawerContent}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="PiabikTraceIt" component={HomeTabNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Post Lost Item" component={PostLostScreen} />
        <Drawer.Screen name="Post Found item" component={PostFoundScreen} />
        <Drawer.Screen name="Follow Up" component={FollowUpScreen} />
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
