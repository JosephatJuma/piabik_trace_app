import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { SegmentedButtons } from "react-native-paper";
const Home = () => {
  const lostItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const [value, setValue] = React.useState("lost");

  const renderItem = ({ item }) => {
    return (
      <Card style={{ margin: 1, borderRadius: 0 }} elevation={1}>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <Header />
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "lost",
            label: "Lost Items",
          },
          {
            value: "found",
            label: "Found Items",
          },
        ]}
        buttonStyle={{ borderWidth: 0, backgroundColor: "red" }}
      />
      {value === "lost" && (
        <FlashList
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data={lostItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          onEndReachedThreshold={5}
          windowSize={5}
          removeClippedSubviews={true}
          estimatedItemSize={50}
        />
      )}
      {value === "found" && (
        <FlashList
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data={lostItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          onEndReachedThreshold={5}
          windowSize={5}
          removeClippedSubviews={true}
          estimatedItemSize={50}
        />
      )}
    </View>
  );
};

export default Home;
