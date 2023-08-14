import { View, ScrollView } from "react-native";
import React, { useContext } from "react";
import { Text, Button, Title } from "react-native-paper";
import { RadioButton } from "react-native-paper";
import { PostsContext } from "../../../App";
const SelectCatgory = () => {
  const { selectedCategory, setSelectedCategory, setShowForm } =
    useContext(PostsContext);
  const categories = [
    "National ID",
    "Academic Documents",
    "Passport",
    "Number Plate",
    "ATM Card",
    "Workplace ID",
    "Treatment/Vaccination Card",
    "Other",
  ];
  return (
    <View>
      <ScrollView style={{ padding: 10 }}>
        <Title variant="bodyMedium">Select Category</Title>
        {categories.map((cat, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <Text>{cat}</Text>
              <RadioButton
                value={cat}
                status={selectedCategory === cat ? "checked" : "unchecked"}
                onPress={
                  selectedCategory === cat
                    ? () => setSelectedCategory("")
                    : () => setSelectedCategory(cat)
                }
              />
            </View>
          );
        })}
        <Button
          mode="contained"
          onPress={() => setShowForm(true)}
          disabled={selectedCategory.length > 0 ? false : true}
        >
          Continue
        </Button>
      </ScrollView>
    </View>
  );
};

export default SelectCatgory;
