import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import RepositoryItem from "./RepositoryItem";

import repositories from "../data/repositories";

const styles = StyleSheet.create({
  separator: { height: 10 },
  header: { height: 10 },
  footer: { height: 10 },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ListHeader = () => <View style={styles.header} />;

const ListFooter = () => <View style={styles.footer} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={RepositoryItem}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
    />
  );
};

export default RepositoryList;
