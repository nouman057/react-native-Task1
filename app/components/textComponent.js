import React from "react";
import { Text } from "react-native";

import Styles from "./Styles";

function TextComponent({ children, style, ...otherProps }) {
  return (
    <Text style={[Styles.headers, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default TextComponent;
