import React from "react";
import { StyleSheet, View } from "react-native";

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: theme.colors.bright.intensity_2,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
