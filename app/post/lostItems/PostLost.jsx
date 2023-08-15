import React, { useContext } from "react";
import Header from "../components/Header";
import SelectCatgory from "../components/SelectCatgory";
import { View, ScrollView } from "react-native";
import { IconButton, TextInput, Text } from "react-native-paper";
import { PostsContext } from "../../../Context/ThemeContext";
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
  const { showForm, setShowForm } = useContext(PostsContext);
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Header title={"Post Lost item"} />

      <View
        style={{
          width: "96%",
          margin: 10,
          height: "100%",
          marginBottom: 200,
        }}
      >
        {showForm === true ? (
          <ScrollView style={{ height: 1000 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                icon={"chevron-left"}
                onPress={() => setShowForm(false)}
              />
              <Text>Change Category</Text>
            </View>
            <TextInput
              mode="outlined"
              label="Category"
              style={{ marginBottom: 20 }}
            />
            <TextInput
              mode="outlined"
              label="Category"
              style={{ marginBottom: 20 }}
            />
            <TextInput
              mode="outlined"
              label="Category"
              style={{ marginBottom: 20 }}
            />
            <TextInput
              mode="outlined"
              label="Category"
              style={{ marginBottom: 20 }}
            />
            <TextInput
              mode="outlined"
              label="Category"
              style={{ marginBottom: 20 }}
            />
            <TextInput
              mode="outlined"
              label="Category"
              style={{ marginBottom: 20 }}
            />
          </ScrollView>
        ) : (
          <SelectCatgory />
        )}
      </View>
    </View>
  );
}

export default PostLost;
