import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.dark[4],
    fontSize: theme.fontSizes.default,
  },
});

const Text = ({ style, ...props }) => {
  const textStyle = [styles.text, style];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
