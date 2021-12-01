import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import TextComponent from "../components/textComponent";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItem from "../components/ListItem";
import AppBarComponent from "../components/appBarComponent";
import searchUserApi from "../api/searchUserApi";
import AppButton from "../components/AppButton";
import colors from "../components/colors";
import UseApi from "../hooks/useApi";
import BottomBar from "../components/bottomBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchActive: false,
      refreshing: false,
      loader: false,
      timer: false,
      error: false,
      username: '"',
      bottomLoader: false,
      page: 1,
      total: 0,
      data: [],
    };
  }

  getSearchApi = new UseApi(searchUserApi.searchUser);

  loadApi = async () => {
    this.setState({ loader: true });
    const response = await searchUserApi.searchUser(
      this.state.username,
      this.state.page
    );
    this.setState({
      loader: false,
      bottomLoader: false,
    });
    if (!response.ok) return this.setState({ error: true });

    if (this.state.page === 1) {
      this.setState({
        data: response.data.items,
        total: response.data.total_count,
      });
      console.log(JSON.stringify(this.state.total));
    } else {
      this.setState({
        data: [...this.state.data, ...response.data.items],
      });
    }
  };

  componentDidMount() {
    console.log("componentDidMount called");
    this.loadApi();
  }

  getUnique(arr, index) {
    const unique = arr
      .map((e) => e[index])
      .map((e, i, final) => final.indexOf(e) === i && i)

      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  render() {
    const callSearchApi = () => {
      this.setState({
        page: 1,
        data: [],
        error: false,
      });

      this.loadApi();
    };

    const onChangeText = (text) => {
      this.setState({ timer: true });
      this.setState({ username: text });
      if (!this.state.timer) {
        setTimeout((time) => {
          console.log("timer ended");
          this.setState({
            page: 1,
            data: [],
            timer: false,
          });
          if (this.state.username.length === 0) {
            this.setState({ username: '"' });
          }
          this.loadApi();
        }, 2000);
      }

      console.log("username" + text);
      clearTimeout();
    };

    const onEndReached = () => {
      console.log("end reached");

      if (this.state.data.length > 19) {
        this.setState({ page: this.state.page + 1 });
        this.setState({ bottomLoader: true });
        this.loadApi();
      }
    };

    const onRefresh = () => {
      this.setState({
        data: [],
        page: 1,
        username: '"',
        searchActive: false,
        error: false,
      });

      this.loadApi();
    };

    return (
      <Screen style={styles.screen}>
        <AppBarComponent
          searchActive={this.state.searchActive}
          textHeader={<TextComponent>Contacts</TextComponent>}
          onPress={() =>
            this.setState({
              searchActive: !this.state.searchActive,
            })
          }
          onChangeText={(text) => onChangeText(text)}
        />
        {this.state.error && (
          <>
            <TextComponent>Could not get data from server.</TextComponent>
            <AppButton title="Retry" onPress={callSearchApi} />
          </>
        )}
        {this.state.data.length === 0 && !this.state.loader && (
          <>
            <TextComponent>Empty List</TextComponent>
          </>
        )}

        {this.state.loader ? (
          <ActivityIndicator
            animating={this.state.loader}
            size={30}
            color={colors.medium}
            style={{ position: "absolute", zIndex: 1, top: 50, left: 165 }}
          />
        ) : null}

        <FlatList
          data={this.state.data}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.login}
              subTitle={item.type + " " + item.id}
              image={item.avatar_url}
              onPress={() =>
                this.props.navigation.navigate("Contact Details", {
                  name: item.login,
                })
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={this.state.refreshing}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.2}
          style={styles.flatList}
        />
        <BottomBar
          total={this.state.total}
          current={this.state.data.length}
          style={styles.bottomBar}
          page={this.state.page}
          load={this.state.bottomLoader}
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  flatList: {
    height: 620,
  },
  bottomBar: {
    justifyContent: "center",
    alignItems: "center",

    // position: "absolute",
    // bottom: 100
  },
});

export default Task;
