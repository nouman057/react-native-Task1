import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import colors from "./colors";
import TextComponent from "./textComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
  givenColor,
}) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && (
          <View
            style={[
              styles.imageBorder,
              { borderColor: givenColor == "" ? "#CFCFCF" : givenColor },
            ]}
          >
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.redCircle}></View>
          </View>
        )}

        <View style={styles.detailsContainer}>
          <Text
            numberOfLines={1}
            style={{ color: givenColor == "" ? colors.dark : givenColor }}
          >
            {title}
          </Text>
          {subTitle && (
            <Text
              numberOfLines={2}
              style={{ color: givenColor == "" ? colors.medium : givenColor }}
            >
              {subTitle}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    marginLeft: 10,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  imageBorder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "#CFCFCF",
    borderEndWidth: 2,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderStartWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
  },
  subTitle: {
    color: "#6e6969",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  chevronIcon: {
    justifyContent: "flex-end",
  },
  redCircle: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 5,
    alignSelf: "flex-end",
    position: "absolute",
    right: 10,
    bottom: 3,
    flex: 1,
  },
});

export default ListItem;
