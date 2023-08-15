import React, { useContext, memo } from "react";
import { View, RefreshControl, FlatList } from "react-native";
import { FlashList } from "@shopify/flash-list";
import {
  Card,
  Text,
  Chip,
  Divider,
  IconButton,
  Menu,
  Button,
  List,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ActionSheet from "../post/components/ActionSheet";
//context
import { ItemsContext } from "../../Context/ThemeContext";

function LostItems({ onScroll }) {
  const navigation = useNavigation();
  const { lostItems, refreshing, fetchItems, showMenu, setShowMenu } =
    useContext(ItemsContext);

  const renderItem = ({ item }) => {
    return (
      <Card
        style={{ borderRadius: 0, borderWidth: 0 }}
        onPress={() =>
          navigation.navigate("Details", {
            item: item,
          })
        }
        accessible={true}
      >
        <Card.Actions>
          <ActionSheet
            component={
              <IconButton icon={"dots-vertical"} style={{ borderWidth: 0 }} />
            }
            title={item.UniqueID}
            options={["Delete", "Cancel", "More", "Figure out"]}
            cancelButtonIndex={1}
            autoFocus={true}
            bg={""}
            indexOnePressed={() => console.log("yes")}
            indexZeroPressed={() => console.log("yes")}
          />
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
        <Divider style={{ marginTop: 2 }} />
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
        onScroll={onScroll}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        data={lostItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.UniqueID}
        numColumns={1}
        initialNumToRender={10}
        maxToRenderPerBatch={20}
        // onEndReachedThreshold={5}
        // windowSize={5}
        //removeClippedSubviews={true}
        estimatedItemSize={160}
      />
    </View>
  );
}

export default memo(LostItems);
