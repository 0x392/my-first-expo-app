import React from "react";
import { StyleSheet, View } from "react-native";

import RepositoryInfo from "./RepositoryInfo";
import RepositoryStatistics from "./RepositoryStatistics";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: theme.colors.dark.intensity_1,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryInfo item={item} />
      <RepositoryStatistics item={item} />
    </View>
  );
};

export default RepositoryItem;
