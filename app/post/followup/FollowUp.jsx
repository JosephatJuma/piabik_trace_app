import { View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Text, TextInput, Button } from "react-native-paper";
const FollowUp = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Follow Up"} />
      <View
        style={{
          height: "50%",
          justifyContent: "space-evenly",
          width: "98%",
        }}
      >
        <TextInput
          mode="outlined"
          label="Enter Follow up code"
          style={{ alignSelf: "center", width: "96%" }}
          keyboardType="numeric"
          maxLength={4}
        />
        <Button
          onPress={() => {}}
          mode="contained"
          style={{ alignSelf: "center", width: "96%" }}
        >
          Submit
        </Button>
      </View>
    </View>
  );
};

export default FollowUp;
