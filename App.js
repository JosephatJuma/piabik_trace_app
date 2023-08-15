import React, { useContext, createContext } from "react";
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
//context
import { ThemeContext } from ".";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
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

//navigators
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
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
    const [refreshing, setRefreshing] = React.useState(true);
    const [err, setErr] = React.useState("");
    const fetchItems = async () => {
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
                  setRefreshing(false);
                })
                .catch((err) => {
                  setErr("Unexpected Error occured");
                  setRefreshing(false);
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
        value={{
          lostItems,
          foundItems,
          matchedItems,
          fetchItems,
          refreshing,
          err,
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
          tabBarAndroidRipple: { borderless: false },
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
      // <Tab.Navigator
      //   shifting={true}
      //   //barStyle={{ backgroundColor: "#FFFFFF" }}
      //   tabBar={({ state, descriptors, navigation }) => (
      //     <CustomTabBarButton
      //       onPress={() => navigation.navigate(state.routeNames[state.index])}
      //     >
      //       {state.routes.map((route, index) => {
      //         const { options } = descriptors[route.key];
      //         const iconSize = 25;
      //         let iconName;

      //         if (route.name === "Home") {
      //           iconName = state.index === index ? "home" : "home";
      //         } else if (route.name === "User") {
      //           iconName = state.index === index ? "user" : "user";
      //         } else if (route.name === "Post") {
      //           iconName = state.index === index ? "addfile" : "addfile";
      //         }

      //         return (
      //           <View key={route.key}>
      //             <AntDesign
      //               name={iconName}
      //               size={iconSize}
      //               color={options.tabBarActiveTintColor}
      //             />
      //             <Text style={{ color: options.tabBarActiveTintColor }}>
      //               {route.name}
      //             </Text>
      //           </View>
      //         );
      //       })}
      //     </CustomTabBarButton>
      //   )}
      // >
      //   <Tab.Screen name="Home" component={HomeScreen} />
      //   <Tab.Screen name="Post" component={PostStackNavigator} />
      //   <Tab.Screen name="User" component={UserScreen} />
      // </Tab.Navigator>
    );
  }

  return (
    <ActionSheetProvider>
      <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator
          drawerContent={DrawerContent}
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name="PiabikTraceIt" component={HomeTabNavigator} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Details" component={DetailsScreen} />
          <Drawer.Screen name="Search" component={SearchScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ActionSheetProvider>
  );
}
