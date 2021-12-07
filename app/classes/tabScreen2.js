import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import userListApi from "../api/userListApi";
import Screen from "../components/Screen";
import TextComponent from "../components/textComponent";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../components/colors";
import ListItem from "../components/ListItem";
import getOrganizations from "../api/getOrganizations";
import ColorPalletComponent from "../components/colorPaletComponent";

class TabScreen2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: false,
      error: false,
      data: {},
      refreshing: false,
      color: "",
    };
  }

  loadApi = async () => {
    this.setState({ loader: true });
    const response = await getOrganizations.getOrganizations();
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
      <View style={styles.container}>
        {this.state.loader ? (
          <ActivityIndicator
            animating={this.state.loader}
            size={30}
            color={colors.medium}
            style={{ position: "absolute", zIndex: 1, top: 50, left: 165 }}
          />
        ) : null}

        <ColorPalletComponent
          color1="cyan"
          color2="crimson"
          color3="darkgoldenrod"
          color4="darkolivegreen"
          color5="darkorchid"
          press1={() => this.setState({ color: "cyan" })}
          press2={() => this.setState({ color: "crimson" })}
          press3={() => this.setState({ color: "darkgoldenrod" })}
          press4={() => this.setState({ color: "darkolivegreen" })}
          press5={() => this.setState({ color: "darkorchid" })}
        />

        <FlatList
          data={this.state.data}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.login}
              subTitle={item.description + " " + item.id}
              image={item.avatar_url}
              givenColor={this.state.color}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={this.state.refreshing}
          //   onRefresh={onRefresh}
          //onEndReached={onEndReached}
          onEndReachedThreshold={0.2}
          style={styles.flatList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  flatList: {
    height: 618,
  },
});

export default TabScreen2;
