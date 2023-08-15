import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";

const ActionSheet = ({
  title,
  options,
  destructiveButtonIndex,
  cancelButtonIndex,
  component,
  autoFocus,
  bg,
  indexZeroPressed,
  indexOnePressed,
  indexTwopress,
  indexThreePressed,
}) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const open = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        title: title,
        useModal: true,
        autoFocus,
        userInterfaceStyle: "dark",
        containerStyle: { backgroundColor: bg ? bg : "#fff" },
        textStyle: { fontWeight: "bold" },
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            indexZeroPressed();
          case 1:
            indexOnePressed();
            break;
          case destructiveButtonIndex:
            // Delete
            break;
          case cancelButtonIndex:
          // Canceled
        }
      }
    );
  };

  return <TouchableOpacity onPress={open}>{component}</TouchableOpacity>;
};

export default ActionSheet;
