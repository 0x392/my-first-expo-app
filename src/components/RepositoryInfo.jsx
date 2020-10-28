import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const Avatar = ({ item }) => {
  const styles = StyleSheet.create({
    avatarImg: {
      width: 60,
      height: 60,
      borderRadius: 10,
    },
  });

  return (
    <View style={styles.avatarContainer}>
      <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatarImg} />
    </View>
  );
};

const Info = ({ item }) => {
  const styles = StyleSheet.create({
    infoContainer: {
      marginLeft: 15,
      flexShrink: 1,
    },
    fullName: {
      fontSize: 18,
      fontWeight: "bold",
    },
    descriptionContainer: {
      marginTop: 5,
    },
    languageContainer: {
      marginTop: 5,
      flexDirection: "row",
    },
    languageButton: {
      padding: 5,
      borderRadius: 5,
      backgroundColor: theme.colors.frost.color_4,
    },
    languageText: {
      color: theme.colors.white,
      fontSize: 12,
    },
  });

  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.fullName}>{item.fullName}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <View>
          <Text>{item.description}</Text>
        </View>
      </View>
      <View style={styles.languageContainer}>
        <View style={styles.languageButton}>
          <Text style={styles.languageText}>{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

const RepositoryInfo = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  });

  return (
    <View style={styles.container}>
      <Avatar item={item} />
      <Info item={item} />
    </View>
  );
};

export default RepositoryInfo;
