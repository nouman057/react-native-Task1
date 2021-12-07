import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import userListApi from "../api/userListApi";
import Screen from "../components/Screen";
import TextComponent from "../components/textComponent";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../components/colors";
import ListItem from "../components/ListItem";
import getLicenses from "../api/getLicenses";
import ColorPalletComponent from "../components/colorPaletComponent";

class TabScreen3 extends React.Component {
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
    const response = await getLicenses.getLicenses();
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
          color1="darkslategrey"
          color2="darkviolet"
          color3="lawngreen"
          color4="rebeccapurple"
          color5="salmon"
          press1={() => this.setState({ color: "darkslategrey" })}
          press2={() => this.setState({ color: "darkviolet" })}
          press3={() => this.setState({ color: "lawngreen" })}
          press4={() => this.setState({ color: "rebeccapurple" })}
          press5={() => this.setState({ color: "salmon" })}
        />

        <FlatList
          data={this.state.data}
          keyExtractor={(data) => data.key.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              subTitle={item.key}
              image={
                "https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              }
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

export default TabScreen3;
