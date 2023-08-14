import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Appbar, Searchbar, IconButton } from "react-native-paper";
const Search = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Appbar.Header style={{ padding: 10 }}>
        <Searchbar
          mode="bar"
          icon={"arrow-left"}
          onIconPress={() => navigation.goBack()}
          autoFocus={true}
          placeholder="Enter something like NIN"
        />
      </Appbar.Header>
    </View>
  );
};

export default Search;
