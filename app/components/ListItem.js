import React from "react";
import {
  View,
  StyleSheet,
  Image,
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
}) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && (
          <View style={styles.imageBorder}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.redCircle}></View>
          </View>
        )}

        <View style={styles.detailsContainer}>
          <TextComponent numberOfLines={1} style={styles.title}>
            {title}
          </TextComponent>
          {subTitle && (
            <TextComponent numberOfLines={2} style={styles.subTitle}>
              {subTitle}
            </TextComponent>
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
