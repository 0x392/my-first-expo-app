import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import repositories from "../data/repositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={RepositoryItem}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryList;
