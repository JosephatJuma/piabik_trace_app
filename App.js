import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import DrawerContent from "./components/DrawerContent";
import axios from "axios";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

//context
import { ThemeContext } from "./Context/ThemeContext";
import { ItemsContext } from "./Context/ThemeContext";
import { PostsContext } from "./Context/ThemeContext";
import { UserContext } from "./Context/ThemeContext";
//import screens
import Home from "./app/home/Home";
import Details from "./app/home/Details";
import Profile from "./app/user/Profile";
import Settings from "./app/user/Settings";
import Search from "./app/user/Search";
import Post from "./app/post/Post";
import PostLost from "./app/post/lostItems/PostLost";
import PostFound from "./app/post/foundItems/PostFound";
import FollowUp from "./app/post/followup/FollowUp";
import OnBoarding from "./app/onBoarding/OnBoarding";
//navigators
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const userType = user !== null ? "user" : "guest";
  const GetStartedScreen = () => {
    return <OnBoarding />;
  };
  const HomeScreen = () => {
    const [lostItems, setLostItems] = React.useState([]);
    const [foundItems, setFoundItems] = React.useState([]);
    const [matchedItems, setMatchedItems] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [err, setErr] = React.useState("");

    const fetchItems = async () => {
      setRefreshing(true);
      setErr("");
      await axios
        .get("https://piabik.onrender.com/v1/api/lostItems")
        .then((response) => {
          setLostItems(response.data);
        })
        .then(async () => {
          await axios
            .get("https://piabik.onrender.com/v1/api/foundItems")
            .then((response) => {
              setFoundItems(response.data);
            })
            .then(async () => {
              await axios
                .get("https://piabik.onrender.com/v1/api/matchedItems")
                .then((response) => {
                  setMatchedItems(response.data);
                })
                .catch((err) => {
                  setErr("Unexpected error occured");
                });
            })
            .catch((err) => {
              setErr("Unexpected error occured");
            });
        })
        .catch((err) => {
          setErr("Unexpected error occured");
        });
      setRefreshing(false);
    };

    React.useEffect(() => {
      fetchItems();
    }, []);
    return (
      <ItemsContext.Provider
        value={{
          lostItems,
          foundItems,
          matchedItems,
          fetchItems,
          refreshing,
          err,
          setErr,
        }}
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
  const SearchScreen = () => {
    return <Search />;
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
            cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
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
        inactiveColor="gray"
        shifting={true}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarAndroidRipple: { borderless: true },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "User") {
              iconName = focused ? "user" : "user";
            } else if (route.name === "Post") {
              iconName = focused ? "addfile" : "addfile";
            }
            return <AntDesign name={iconName} size={25} color={color} />;
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
  const currentView = {
    user: (
      <Drawer.Navigator
        drawerContent={DrawerContent}
        screenOptions={{
          headerShown: false,
          swipeEdgeWidth: 100,
          drawerType: "front",
          swipeMinDistance: 100,
          drawerStyle: { width: "85%" },
        }}
      >
        <Drawer.Screen name="PiabikTraceIt" component={HomeTabNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
      </Drawer.Navigator>
    ),
    guest: (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="getStarted" component={GetStartedScreen} />
      </Stack.Navigator>
    ),
  }[userType];
  return (
    <ActionSheetProvider>
      <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
        {currentView}
      </NavigationContainer>
    </ActionSheetProvider>
  );
}
