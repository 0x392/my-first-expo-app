import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: theme.colors.bright.white,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: theme.colors.bright[3],
  },
  upperContainer: {
    paddingTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  avatarContainer: {},
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  basicInfo: {
    marginLeft: 15,
    flexShrink: 1,
  },
  fullName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionWrapper: {
    marginTop: 5,
  },
  languageWrapper: {
    marginTop: 5,
    flexDirection: "row",
  },
  languageButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.frost[4],
  },
  language: {
    color: theme.colors.bright.white,
    fontSize: 12,
  },
  lowerContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  additionalInfo: {
    justifyContent: "center",
  },
  centeredText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  additionalInfoLabel: {
    color: theme.colors.dark[1],
  },
});

const AdditionalInfo = ({ label, value }) => {
  const formattedValue =
    value > 1000 ? `${Math.round(value / 100) / 10}k` : value;

  return (
    <View style={styles.additionalInfo}>
      <View style={styles.centeredText}>
        <Text>{formattedValue}</Text>
      </View>
      <View style={styles.centeredText}>
        <Text style={styles.additionalInfoLabel}>{label}</Text>
      </View>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.upperContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        </View>
        <View style={styles.basicInfo}>
          <View>
            <Text style={styles.fullName}>{item.fullName}</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <View>
              <Text>{item.description}</Text>
            </View>
          </View>
          <View style={styles.languageWrapper}>
            <View style={styles.languageButton}>
              <Text style={styles.language}>{item.language}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <AdditionalInfo label="Stars" value={item.stargazersCount} />
        <AdditionalInfo label="Forks" value={item.forksCount} />
        <AdditionalInfo label="Reviews" value={item.reviewCount} />
        <AdditionalInfo label="Rating" value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
