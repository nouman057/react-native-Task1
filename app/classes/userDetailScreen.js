import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Screen from "../components/Screen";
import TextComponent from "../components/textComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../components/colors";
import ListItem from "../components/ListItem";
import IconButton from "../components/iconButton";
import UseApi from "../hooks/useApi";
import getUserDetails from "../api/getUserDetails";
class UserDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: false,
      error: false,
      username: this.props.route.params.name,
      data: {},
    };
  }

  userDetails = new UseApi(getUserDetails.getUserDetails);

  loadApi = async () => {
    this.setState({ loader: true });
    const response = await getUserDetails.getUserDetails(this.state.username);
    this.setState({
      loader: false,
    });
    if (!response.ok) return this.setState({ error: true });

    this.setState({
      data: response.data,
    });
  };

  componentDidMount() {
    this.loadApi();
  }

  render() {
    return (
      <Screen style={styles.screen}>
        <View style={styles.outerContainer}>
          <IconButton
            title="arrow-left"
            color={colors.white}
            onPress={() => this.props.navigation.goBack(null)}
          />
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              paddingTop: 5,
              fontWeight: "bold",
            }}
          >
            Profile Settings
          </Text>
        </View>

        <View style={styles.image}>
          <Image
            style={styles.imageContainer}
            source={{ uri: this.state.data.avatar_url }}
          />
        </View>
        <View style={styles.upperText}>
          <TextComponent>{this.state.data.login}</TextComponent>
          <View style={styles.rowText}>
            <TextComponent>
              {this.state.data.email === null
                ? "example@gmail.com"
                : this.state.data.email}
            </TextComponent>
            <MaterialCommunityIcons
              name="content-copy"
              color={colors.lightPurple}
              size={15}
            />
          </View>
        </View>
        <View style={styles.divider}></View>

        <TextComponent style={styles.infoText}>Account Info</TextComponent>
        <ListItem
          IconComponent={
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: colors.lightPurple,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="office-building"
                color="white"
                size={40}
              />
            </View>
          }
          title="Company"
          subTitle={
            this.state.data.company === null ? "None" : this.state.data.company
          }
        />
        <ListItem
          IconComponent={
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: colors.lightPurple,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="map-marker"
                color="white"
                size={40}
              />
            </View>
          }
          title="Location"
          subTitle={
            this.state.data.location === null
              ? "None"
              : this.state.data.location
          }
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
  },
  outerContainer: {
    height: 200,
    backgroundColor: colors.lightPurple,
    borderBottomLeftRadius: 80,
    padding: 20,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 65,
    alignSelf: "center",
    top: -55,
    elevation: 5,
    backgroundColor: "white",
  },
  imageContainer: {
    height: 130,
    width: 130,
    borderRadius: 65,
  },
  upperText: {
    justifyContent: "center",
    alignItems: "center",
    top: -25,
  },
  rowText: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
  },
  divider: {
    height: 1,
    backgroundColor: colors.medium,
  },
  infoText: {
    marginTop: 30,
    paddingBottom: 10,
    paddingLeft: 28,
  },
});
export default UserDetailScreen;
