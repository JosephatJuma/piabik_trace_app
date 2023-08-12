import { View, ScrollView } from "react-native";
import React from "react";
import { Text, Card, Title } from "react-native-paper";
import { RadioButton } from "react-native-paper";
const SelectCatgory = () => {
  const [showSelect, setShowSelect] = React.useState(true);
  const [checked, setChecked] = React.useState("");

  const toggleShowModalle = () => {
    setShowSelect(!showSelect);
  };

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
      <Card>
        <Card.Content>
          <Title variant="bodyMedium">Select Category</Title>
          <ScrollView>
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
                    status={checked === cat ? "checked" : "unchecked"}
                    onPress={() => setChecked(cat)}
                  />
                </View>
              );
            })}
          </ScrollView>
        </Card.Content>
      </Card>
    </View>
  );
};

export default SelectCatgory;
