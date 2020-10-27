import React from "react";
import { Text, View } from "react-native";

const RepositoryItem = ({ item }) => {
  return (
    <View>
      {Object.getOwnPropertyNames(item).map((propName) => (
        <Text key={propName}>
          {propName}: {item[propName]}
        </Text>
      ))}
    </View>
  );
};

export default RepositoryItem;
