import React from "react";
import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import theme from "../theme";

const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: theme.colors.bright[2],
  },
});

const Main = () => {
  return (
    <View style={styles.main}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
