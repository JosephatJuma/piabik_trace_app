import { View, ImageBackground, StyleSheet } from "react-native";
import React, { useContext } from "react";
import {
  Appbar,
  Surface,
  Text,
  Title,
  IconButton,
  Button,
  Card,
} from "react-native-paper";
import { UserContext } from "../../Context/ThemeContext";
const OnBoarding = () => {
  const { setUser } = useContext(UserContext);
  return (
    <ImageBackground
      source={require("../assets/image.jpg")}
      style={styles.image}
    >
      <Surface style={styles.overlay}>
        <Card.Content
          style={{
            alignItems: "center",
            width: "98%",
            backgroundColor: "#000000c0",
            borderRadius: 10,
            padding: 20,
            borderWidth: 0.5,
            borderColor: "#fff",
          }}
        >
          <Title style={styles.title}>Hi </Title>
          <Title style={styles.text}>You're Welcome</Title>
          <Text style={styles.text2}>
            Join a community of thousands of people in helping others recover
            their lost documents
          </Text>
        </Card.Content>
        <Button
          mode="contained"
          elevation={3}
          style={{
            width: "80%",
            position: "absolute",
            margin: 16,
            //right: 0,
            bottom: 0,
            borderColor: "#fff",
            borderWidth: 5,
          }}
          onPress={() => setUser({ lauched: true })}
        >
          Get Started
        </Button>
      </Surface>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover", // You can also use 'contain' or 'stretch'
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // You can adjust the opacity here
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    //justifyContent: "flex-end",
    alignItems: "center",
  },
  title: { color: "#ffff", fontWeight: "bold", fontSize: 30 },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  text2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "normal",
  },
});
export default OnBoarding;
