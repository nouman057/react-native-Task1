import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import colors from "./colors";
import TextComponent from "./textComponent";

function BottomBar({ total, current, load, style, page }) {
  return (
    <View style={[style, styles.container]}>
      <TextComponent>
        Showing {current} out of ({total})
      </TextComponent>

      {load ? (
        <ActivityIndicator size={20} animating={load} color={colors.medium} />
      ) : (
        <TextComponent>Page: {page}</TextComponent>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.white,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    elevation: 2,
  },
});

export default BottomBar;
