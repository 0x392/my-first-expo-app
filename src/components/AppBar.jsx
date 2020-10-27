import Constants from "expo-constants";
import React from "react";
import { View, StyleSheet } from "react-native";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  appBar: {
    height: 95,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 20,
    backgroundColor: theme.colors.bright[3],
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: theme.colors.bright[1],
  },
});

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <AppBarTab text="Repositories" />
      <AppBarTab text="Sign in" />
    </View>
  );
};

export default AppBar;
