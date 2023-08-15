import { View, Text } from "react-native";
import React from "react";
import { List, Surface, Divider } from "react-native-paper";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const options = [
    { id: 1, name: "Settings", icon: "cog" },
    { id: 2, name: "Login", icon: "login" },
    { id: 3, name: "Logout", icon: "location-exit" },
    { id: 4, name: "Edit profile", icon: "account" },
  ];
  return (
    <View>
      <Header />
      <View
        style={{ width: "100%", alignContent: "center", alignItems: "center" }}
      >
        <Surface
          style={{
            width: "98%",
            margin: "auto",
            alignSelf: "center",
          }}
        >
          {/* <List.Subheader>Some title</List.Subheader> */}
          {options.map((option) => {
            return (
              <React.Fragment key={option.id}>
                <List.Item
                  title={option.name}
                  left={() => <List.Icon icon={option.icon} />}
                  right={() => <List.Icon icon="chevron-right" size={24} />}
                  onPress={() => navigation.navigate(option.name)}
                  style={{ alignSelf: "center" }}
                />
                <Divider />
              </React.Fragment>
            );
          })}
        </Surface>
      </View>
    </View>
  );
};

export default Profile;
