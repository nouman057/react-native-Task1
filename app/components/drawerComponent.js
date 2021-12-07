import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "./colors";
import Screen from "./Screen";
import TextComponent from "./textComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "./iconButton";
import { useState } from "react";

const DrawerComponent = (props) => {
  const [tapped, setTapped] = useState(false);
  return (
    <>
      <View style={styles.outerView}>
        <Image
          style={styles.image}
          source={require("../../assets/coeus.png")}
        />
        <View style={styles.textStyle}>
          <TextComponent style={styles.text}>Nouman Saleem</TextComponent>
          <TextComponent style={styles.text}>
            Trainee at Coeus Solutions
          </TextComponent>
        </View>
        <View style={styles.iconView}>
          <IconButton
            title={tapped ? "heart" : "heart-outline"}
            color={colors.white}
            onPress={() => setTapped(!tapped)}
          />
          <MaterialCommunityIcons name="grid" size={25} color={colors.white} />
        </View>
      </View>
      <DrawerContent {...props}>
        <DrawerItem {...props} />
      </DrawerContent>
    </>
    // <Screen>
    // </Screen>
  );
};

const styles = StyleSheet.create({
  outerView: {
    backgroundColor: "orange",
    height: 350,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  textStyle: {
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: colors.white,
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 80,
    alignSelf: "center",
    marginTop: 10,
  },
});

export default DrawerComponent;
