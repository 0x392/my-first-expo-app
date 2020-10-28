import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "./Text";
import theme from "../theme";

const StatisticItem = ({ label, value }) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
    },
    centeredText: {
      flexDirection: "row",
      justifyContent: "center",
    },
    labelText: {
      color: theme.colors.aurora.color_1,
    },
  });

  const formattedValue =
    value > 1000 ? `${Math.round(value / 100) / 10}k` : value;

  return (
    <View style={styles.container}>
      <View style={styles.centeredText}>
        <Text>{formattedValue}</Text>
      </View>
      <View style={styles.centeredText}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </View>
  );
};

const RepositoryStatistics = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

  return (
    <View style={styles.container}>
      <StatisticItem label="Stars" value={item.stargazersCount} />
      <StatisticItem label="Forks" value={item.forksCount} />
      <StatisticItem label="Reviews" value={item.reviewCount} />
      <StatisticItem label="Rating" value={item.ratingAverage} />
    </View>
  );
};
export default RepositoryStatistics;
