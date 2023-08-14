import React, { useContext, memo } from "react";
import { View, RefreshControl } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Card, Text, Chip, Divider, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ItemsContext } from "../../App";

const MatchedItems = () => {
  const navigation = useNavigation();
  const { matchedItems, refreshing, fetchItems } = useContext(ItemsContext);

  const renderItem = ({ item }) => {
    return (
      <Card
        style={{ borderRadius: 0, paddingBottom: 5, borderWidth: 0 }}
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 86,
            item: item,
            otherParam: "anything you want here",
          })
        }
      >
        <Card.Actions>
          <IconButton icon={"dots-vertical"} style={{ borderWidth: 0 }} />
        </Card.Actions>
        <Card.Content>
          <Text variant="titleMedium">{item.UniqueID}</Text>
          <Text variant="bodyMedium">{item.Category}</Text>
        </Card.Content>
        <Card.Content
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text variant="bodyMedium">
            Posted On: {new Date(item.DatePosted).toLocaleDateString()}
          </Text>
          <Chip icon="clock" style={{ borderRadius: 100 }}>
            {new Date(item.DatePosted).toLocaleTimeString()}
          </Chip>
        </Card.Content>
      </Card>
    );
  };
  //Refresh
  const onRefresh = React.useCallback(() => {
    fetchItems();
  }, []);
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlashList
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            size="default"
            title="Relaoding"
          />
        }
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        data={matchedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.UniqueID}
        numColumns={1}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        onEndReachedThreshold={5}
        windowSize={5}
        removeClippedSubviews={true}
        estimatedItemSize={100}
      />
    </View>
  );
};

export default memo(MatchedItems);