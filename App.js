import React, { useContext, createContext } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import DrawerContent from "./components/DrawerContent";
import axios from "axios";
import { ThemeContext } from ".";
//import screens
import Home from "./app/home/Home";
import Details from "./app/home/Details";
import Profile from "./app/user/Profile";
import Settings from "./app/user/Settings";
import Post from "./app/post/Post";
import PostLost from "./app/post/lostItems/PostLost";
import PostFound from "./app/post/foundItems/PostFound";
import FollowUp from "./app/post/followup/FollowUp";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
//context
export const ItemsContext = createContext();
export const PostsContext = createContext();

export default function App() {
  const { theme } = useContext(ThemeContext);

  const HomeScreen = () => {
    const [lostItems, setLostItems] = React.useState([]);
    const [foundItems, setFoundItems] = React.useState([]);
    const [matchedItems, setMatchedItems] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [err, setErr] = React.useState("");
    const fetchItems = async () => {
      await axios
        .get("http://192.168.1.8:3000/v1/api/lostItems")
        .then((response) => {
          setLostItems(response.data[0]);
        })
        .then(async () => {
          await axios
            .get("http://192.168.1.8:3000/v1/api/foundItems")
            .then((response) => {
              setFoundItems(response.data[0]);
            })
            .then(async () => {
              await axios
                .get("http://192.168.1.8:3000/v1/api/matchedItems")
                .then((response) => {
                  setMatchedItems(response.data[0]);
                  setRefreshing(false);
                })
                .catch((err) => {
                  setErr("Unexpected Error occured");
                });
            })
            .catch((err) => {
              setErr("Un Expected Error occured");
              setRefreshing(false);
            });
        });
    };

    React.useEffect(() => {
      fetchItems();
    }, []);
    return (
      <ItemsContext.Provider
        value={{ lostItems, foundItems, matchedItems, fetchItems, refreshing }}
      >
        <Home />
      </ItemsContext.Provider>
    );
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
  const DetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;
    return <Details item={item} />;
  };
  function PostStackNavigator() {
    const [selectedCategory, setSelectedCategory] = React.useState([]);
    const [showForm, setShowForm] = React.useState(false);
    return (
      <PostsContext.Provider
        value={{ selectedCategory, setSelectedCategory, showForm, setShowForm }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="Posts" component={PostScreen} />
          <Stack.Screen name="Post Lost Item" component={PostLostScreen} />
          <Stack.Screen name="Post Found item" component={PostFoundScreen} />
          <Stack.Screen name="Follow Up" component={FollowUpScreen} />
        </Stack.Navigator>
      </PostsContext.Provider>
    );
  }
  function HomeTabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          //tabBarShowLabel: false,
          tabBarLabelStyle: { fontSize: 15, fontWeight: "bold" },
          tabBarStyle: { height: 60, fontSize: 30 },
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
        <Tab.Screen name="Post" component={PostStackNavigator} />
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
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
