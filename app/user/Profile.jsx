import { View, Text } from "react-native";
import React from "react";
import { List, MD3Colors } from "react-native-paper";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
const Profile = () => {
  const navigation = useNavigation();
  const options = [
    { id: 1, name: "Settings", icon: "setting" },
    { id: 2, name: "Login", icon: "login" },
    { id: 3, name: "Logout", icon: "logout" },
    { id: 4, name: "Edit profile", icon: "user" },
  ];
  return (
    <View>
      <Header />
      <View
        style={{ width: "100%", alignContent: "center", alignItems: "center" }}
      >
        <List.Section
          style={{
            width: "98%",
            margin: "auto",
            alignSelf: "center",
          }}
        >
          {/* <List.Subheader>Some title</List.Subheader> */}
          {options.map((option) => {
            return (
              <List.Item
                title={option.name}
                left={() => (
                  <List.Icon icon={option.icon} variant={AntDesign} />
                )}
                right={() => <List.Icon icon="chevron-right" size={24} />}
                key={option.id}
                onPress={() => navigation.navigate(option.name)}
                style={{ alignSelf: "center" }}
              />
            );
          })}
        </List.Section>
      </View>
    </View>
  );
};

export default Profile;
