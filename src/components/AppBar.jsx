import Constants from "expo-constants";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    height: 95,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bright.intensity_3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: theme.colors.bright.intensity_1,
  },
  scrollView: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Link to="/" component={AppBarTab} text="Repositories" />
        <Link to="/sign-in" component={AppBarTab} text="Sign in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
