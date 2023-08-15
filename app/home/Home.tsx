import React,{useContext} from "react";
import { View,Animated, } from "react-native";
import { FAB,ProgressBar,Text } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import LostItems from "./LostItems";
import FoundItems from "./FoundItems";
import Header from "../../components/Header";
import MatchedItems from "./MatchedItems";
//context
import { ItemsContext } from "../../Context/ThemeContext";

const TopTab = createMaterialTopTabNavigator();


const Home = () => {
  const navigation: any = useNavigation();
   const scrollY = React.useRef(new Animated.Value(0)).current;
const {refreshing,err}=useContext(ItemsContext);
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  // Calculate the threshold where the top bar should start scrolling up
  const headerScrollThreshold = 10; 
 
  const LostItemsScreen = () => {
    return <LostItems onScroll={onScroll}/>;
  };
  const MatchedItemsScreen = () => {
    return <MatchedItems onScroll={onScroll}/>
  }
  const FoundItemsScreen = () => {
    return <FoundItems onScroll={onScroll}/>;
  };
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Animated.View
        style={{
          height: scrollY.interpolate({
            inputRange: [0, headerScrollThreshold],
            outputRange: [100, 35],
            extrapolate: "clamp",
          }),
          // Change this to your desired top bar background color
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Header />
        </Animated.View>
      {refreshing &&
        <ProgressBar indeterminate={true} />}
      
      <TopTab.Navigator
          screenOptions={{
          tabBarLabelStyle: { fontSize: 15, textTransform: "capitalize", fontWeight:'bold' },
          }}
          
      >
        <TopTab.Screen name="Lost Items" component={LostItemsScreen} />
        <TopTab.Screen name="Found Items" component={FoundItemsScreen} />
        <TopTab.Screen name="Matched" component={MatchedItemsScreen} />
        </TopTab.Navigator>
     
        {err && <Text>{err}</Text>}
      
      <FAB
        icon="plus"
        style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
        onPress={() => navigation.navigate("Post")}
      />
    </View>
  );
};

export default Home;
