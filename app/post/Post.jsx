import { View } from "react-native";
import React from "react";
import Header from "./components/Header";
import { Text, Button, List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Post = () => {
  const navigation = useNavigation();
  const options = [
    {
      id: 1,
      name: "Post Lost Item",
      des: "If you lost an item, report it here",
      icon: "plus-box",
    },
    {
      id: 2,
      name: "Post Found item",
      des: "If you found a lost item, report it here",
      icon: "tag-plus",
    },
    {
      id: 3,
      name: "Follow Up",
      des: "If you posted a lost or found item, follow it up here",
      icon: "card-account-details",
    },
  ];
  return (
    <View>
      <Header title={"Post Item"} />
      {/* <PostsContext.Provider value={{ selectedCategory, setSelectedCategory }}> */}
      {options.map((option, index) => {
        return (
          <List.Item
            key={index}
            title={option.name}
            description={option.des}
            left={(props) => <List.Icon {...props} icon={option.icon} />}
            onPress={() => navigation.navigate(option.name)}
            style={{ height: 100 }}
          />
        );
      })}
      {/* </PostsContext.Provider> */}
    </View>
  );
};

export default Post;
