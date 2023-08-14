import { View, ScrollView } from "react-native";
import React, { useContext } from "react";
import Header from "../components/Header";
import { Text, TextInput, IconButton } from "react-native-paper";
import SelectCatgory from "../components/SelectCatgory";
import { PostsContext } from "../../../App";
const PostFound = () => {
  const { showForm, setShowForm } = useContext(PostsContext);
  return (
    <View>
      <Header title={"Post Found Item"} />

      <ScrollView
        style={{
          width: "96%",
          margin: 10,
          height: "100%",
          marginBottom: 200,
        }}
      >
        {showForm === true ? (
          <View>
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

            <TextInput mode="outlined" label="Category" />
            <TextInput mode="outlined" label="Category" />
            <TextInput mode="outlined" label="Category" />
            <TextInput mode="outlined" label="Category" />
            <TextInput mode="outlined" label="Category" />
            <TextInput mode="outlined" label="Category" />
          </View>
        ) : (
          <SelectCatgory />
        )}
      </ScrollView>
    </View>
  );
};

export default PostFound;
