import React from "react";
import { View } from "react-native";
import { FAB } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import LostItems from "./LostItems";
import FoundItems from "./FoundItems";
import Header from "../../components/Header";
const TopTab = createMaterialTopTabNavigator();
const Home = () => {
  const navigation = useNavigation();
  const LostItemsScreen = () => {
    return <LostItems />;
  };
  const FoundItemsScreen = () => {
    return <FoundItems />;
  };
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Header />
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15, textTransform: "capitalize" },
        }}
      >
        <TopTab.Screen name="Lost Items" component={LostItemsScreen} />
        <TopTab.Screen name="Found Items" component={FoundItemsScreen} />
      </TopTab.Navigator>
      <FAB
        icon="plus"
        style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
        onPress={() => navigation.navigate("Post")}
      />
    </View>
  );
};

export default Home;
