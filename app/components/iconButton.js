import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "./colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={{ backgroundColor: colors[color] }}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={title} size={26} color={color} />
    </TouchableOpacity>
  );
}

export default IconButton;
