import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Portal, Provider } from "react-native-paper";

const ActionSheet = () => {
  const [visible, setVisible] = useState(false);

  const openActionSheet = () => setVisible(true);
  const closeActionSheet = () => setVisible(false);

  const handleActionPress = (action) => {
    console.log(`Selected action: ${action}`);
    closeActionSheet();
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Button onPress={openActionSheet}>Open ActionSheet</Button>
        <Portal>
          <ActionSheetContent
            visible={visible}
            onPress={handleActionPress}
            onClose={closeActionSheet}
          />
        </Portal>
      </View>
    </Provider>
  );
};

const ActionSheetContent = ({ visible, onPress, onClose }) => {
  if (!visible) return null;

  const actions = [
    { label: "Action 1", value: "action1" },
    { label: "Action 2", value: "action2" },
    { label: "Cancel", value: "cancel" },
  ];

  return (
    <View style={styles.actionSheet}>
      {actions.map((action) => (
        <Button key={action.value} onPress={() => onPress(action.value)}>
          {action.label}
        </Button>
      ))}
      <Button onPress={onClose}>Close</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionSheet: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 4,
  },
});

export default ActionSheet;
