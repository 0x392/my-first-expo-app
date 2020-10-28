import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    padding: 5,
    marginRight: 15,
  },
});

const AppBarTab = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.tab}>
        <Text>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
