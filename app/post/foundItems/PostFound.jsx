import { View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Text } from "react-native-paper";
import SelectCatgory from "../components/SelectCatgory";
const PostFound = () => {
  return (
    <View>
      <Header title={"Post Found Item"} />
      <SelectCatgory />
    </View>
  );
};

export default PostFound;
