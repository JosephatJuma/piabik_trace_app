import { View, ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Header from "../components/Header";
import { Text, TextInput, IconButton, Button } from "react-native-paper";
import SelectCatgory from "../components/SelectCatgory";
import { PostsContext } from "../../../Context/ThemeContext";
const PostFound = () => {
  const { showForm, setShowForm, selectedCategory } = useContext(PostsContext);

  const renderInputBasedOnCategory = () => {
    switch (selectedCategory) {
      case "National ID":
        return (
          <TextInput mode="outlined" label="Enter NIN" style={styles.input} />
        );
      case "Academic Documents":
        return (
          <>
            <TextInput
              mode="outlined"
              label="Document ID"
              style={styles.input}
            />
            <TextInput
              mode="outlined"
              label="Enter Institution Name"
              style={styles.input}
            />
          </>
        );
      case "Passport":
        return (
          <>
            <TextInput
              mode="outlined"
              label="Passport Number"
              style={styles.input}
            />
            <TextInput
              mode="outlined"
              label="Passport Owner"
              style={styles.input}
            />
          </>
        );
      case "Number Plate":
        return (
          <>
            <TextInput
              mode="outlined"
              label="Number Plate"
              style={styles.input}
            />
          </>
        );
      case "ATM Card":
        return (
          <>
            <TextInput
              mode="outlined"
              label="Card Number"
              style={styles.input}
            />
          </>
        );
      case "Workplace ID":
        return (
          <>
            <TextInput mode="outlined" label="ID Number" style={styles.input} />
            <TextInput
              mode="outlined"
              label="Company Name"
              style={styles.input}
            />
          </>
        );
      case "Treatment/Vaccination Card":
        return (
          <>
            <TextInput
              mode="outlined"
              label="Card Number"
              style={styles.input}
            />
            <TextInput
              mode="outlined"
              label="Enter Hosipital"
              style={styles.input}
            />
            <TextInput
              mode="outlined"
              label="Specify the Card"
              style={styles.input}
            />
          </>
        );

      default:
        return (
          <>
            <TextInput mode="outlined" label="Specify" style={styles.input} />
            <TextInput
              mode="outlined"
              label="Serial Number"
              style={styles.input}
            />
            <TextInput
              mode="outlined"
              label="Describe the item"
              multiline={true}
              style={styles.input}
            />
          </>
        ); // Default case or handle undefined category
    }
  };
  return (
    <View>
      <Header title={"Post Found Item"} />

      {showForm === true ? (
        <ScrollView>
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
          <IconButton
            icon={"camera"}
            size={80}
            style={{ alignSelf: "center" }}
            onPress={() => {}}
          />
          {renderInputBasedOnCategory()}
          {/* <TextInput mode="outlined" label="Category" style={styles.input} />
          <TextInput mode="outlined" label="Category" style={styles.input} /> */}
          <Button
            mode="contained"
            onPress={() => {}}
            style={{ width: "90%", alignSelf: "center" }}
          >
            Submit
          </Button>
        </ScrollView>
      ) : (
        <SelectCatgory />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: { marginBottom: 20, width: "96%", alignSelf: "center" },
});
export default PostFound;
