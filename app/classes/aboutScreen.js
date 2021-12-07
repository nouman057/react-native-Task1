import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import TextComponent from "../components/textComponent";
import Screen from "../components/Screen";
import colors from "../components/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class AboutScreen extends React.Component {
  render() {
    return (
      <Screen style={styles.screen}>
        <View style={styles.appBar}>
          <MaterialCommunityIcons
            name="menu"
            size={25}
            color={colors.medium}
            onPress={() => this.props.navigation.openDrawer()}
          />
        </View>
        <View>
          <ImageBackground
            style={styles.imageBackground}
            source={require("../../assets/back.png")}
          />
        </View>
        <TextComponent style={styles.headerText}>About Me</TextComponent>
        <TextComponent style={styles.bodyText}>
          I am a React Native Developer at Coeus Solutions. I have been training
          for 18 days now. So far, its going good, i am facing some errors, but
          they all were either Api issues or framework issues.
        </TextComponent>
      </Screen>
    );
  }
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
  screen: {
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: 300,
  },
  headerText: {
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 10,
    color: "orange",
  },
  bodyText: {
    margin: 10,
    textAlign: "justify",
    lineHeight: 30,
  },
});
export default AboutScreen;
