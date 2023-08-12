import React from "react";
import Header from "../components/Header";
import SelectCatgory from "../components/SelectCatgory";
import { View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";

function PostLost() {
  // const categories = [
  //   "Student ID",
  //   "Pass Book",
  //   "UCE Certificate",
  //   "Library Card",
  //   "UACE Certificate",
  //   "Transcript",
  //   "Library Card",
  // ];

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Header title={"Post Lost item"} />
      <ScrollView
        style={{ width: "96%", margin: 10, height: "100%", marginBottom: 200 }}
      >
        <SelectCatgory />
        {/* <View>
          <TextInput mode="outlined" label="Category" />
          <TextInput mode="outlined" label="Category" />
          <TextInput mode="outlined" label="Category" />
          <TextInput mode="outlined" label="Category" />
          <TextInput mode="outlined" label="Category" />
          <TextInput mode="outlined" label="Category" />
        </View> */}
      </ScrollView>
    </View>
  );
}

export default PostLost;
