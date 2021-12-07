import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";

function ColorPalletComponent({
  press1,
  press2,
  press3,
  press4,
  press5,
  color1,
  color2,
  color3,
  color4,
  color5,
}) {
  return (
    <View style={styles.colorRow}>
      <TouchableHighlight style={{ borderRadius: 5 }} onPress={press1}>
        <View
          style={{
            backgroundColor: color1,
            height: 30,
            width: 30,
            borderRadius: 5,
          }}
        ></View>
      </TouchableHighlight>

      <TouchableHighlight style={{ borderRadius: 5 }} onPress={press2}>
        <View
          style={{
            backgroundColor: color2,
            height: 30,
            width: 30,
            borderRadius: 5,
          }}
        ></View>
      </TouchableHighlight>
      <TouchableHighlight style={{ borderRadius: 5 }} onPress={press3}>
        <View
          style={{
            backgroundColor: color3,
            height: 30,
            width: 30,
            borderRadius: 5,
          }}
        ></View>
      </TouchableHighlight>
      <TouchableHighlight style={{ borderRadius: 5 }} onPress={press4}>
        <View
          style={{
            backgroundColor: color4,
            height: 30,
            width: 30,
            borderRadius: 5,
          }}
        ></View>
      </TouchableHighlight>
      <TouchableHighlight style={{ borderRadius: 5 }} onPress={press5}>
        <View
          style={{
            backgroundColor: color5,
            height: 30,
            width: 30,
            borderRadius: 5,
          }}
        ></View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  colorRow: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default ColorPalletComponent;
