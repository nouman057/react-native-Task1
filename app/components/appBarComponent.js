import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
// import { TextInput } from "react-native-gesture-handler";
import colors from "./colors";
import IconButton from "./iconButton";
import TextComponent from "./textComponent";

function AppBarComponent({
  searchActive,
  onPress,
  textHeader,
  onChangeText,
  pressedIn,
  onMenuPress,
  onCancelPress,
}) {
  return (
    <View style={styles.appBar}>
      <IconButton title="menu" color={colors.medium} onPress={onMenuPress} />

      {searchActive ? (
        <TextInput
          placeholder="search"
          style={{ width: 200 }}
          onChangeText={onChangeText}
          onPressIn={pressedIn}
          autoFocus
        />
      ) : (
        textHeader
      )}
      {searchActive ? (
        <IconButton
          title="close"
          color={colors.medium}
          onPress={onCancelPress}
        />
      ) : (
        <IconButton title="magnify" color={colors.medium} onPress={onPress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    elevation: 3,
  },
});

export default AppBarComponent;
