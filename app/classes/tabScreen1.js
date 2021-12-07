import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import userListApi from "../api/userListApi";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../components/colors";
import ListItem from "../components/ListItem";
import ColorPalletComponent from "../components/colorPaletComponent";

class TabScreen1 extends React.Component {
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
    const response = await userListApi.getUsers();
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
          color1="red"
          color2="orange"
          color3="purple"
          color4="green"
          color5="dodgerblue"
          press1={() => this.setState({ color: "red" })}
          press2={() => this.setState({ color: "orange" })}
          press3={() => this.setState({ color: "purple" })}
          press4={() => this.setState({ color: "green" })}
          press5={() => this.setState({ color: "dodgerblue" })}
        />

        <FlatList
          data={this.state.data}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.login}
              subTitle={item.type + " " + item.id}
              image={item.avatar_url}
              givenColor={this.state.color}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={this.state.refreshing}
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
    marginTop: 20,
    height: 618,
    textDecorationColor: "blue",
  },
  colorRow: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default TabScreen1;
