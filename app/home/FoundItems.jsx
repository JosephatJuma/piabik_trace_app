import React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { FAB, Card, Text, Button, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const FoundItems = () => {
  const navigation = useNavigation();
  const lostItems = [
    { id: 1, category: "Category", uniqueId: "Unique id" },
    { id: 2, category: "Category", uniqueId: "Unique id" },
    { id: 3, category: "Category", uniqueId: "Unique id" },
    { id: 4, category: "Category", uniqueId: "Unique id" },
    { id: 5, category: "Category", uniqueId: "Unique id" },
    { id: 6, category: "Category", uniqueId: "Unique id" },
  ];

  const renderItem = ({ item }) => {
    return (
      <Card style={{ borderRadius: 0 }} elevation={1} onPress={() => {}}>
        <Card.Content>
          <Text variant="titleLarge">{item.uniqueId}</Text>
          <Text variant="bodyMedium">{item.category}</Text>
          <Text variant="bodyMedium">Date Posted</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
        <Divider />
      </Card>
    );
  };
  return (
    <View style={{ flex: 1, width: "100%" }}>
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

      <FAB
        icon="plus"
        style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
        onPress={() => navigation.navigate("Post")}
      />
    </View>
  );
};

export default FoundItems;
