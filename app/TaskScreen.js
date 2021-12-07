import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Screen from "./components/Screen";
import TextComponent from "./components/textComponent";
import ListItemSeparator from "./components/ListItemSeparator";
import useApi from "./hooks/useApi";
import ListItem from "./components/ListItem";
import AppBarComponent from "./components/appBarComponent";
import searchUserApi from "./api/searchUserApi";
import AppButton from "./components/AppButton";
import colors from "./components/colors";

function TaskScreen(props) {
  const getSearchApi = useApi(searchUserApi.searchUser);

  const [searchActive, setSearchActive] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [bottomLoader, setBottomLoader] = useState(false);
  const [timer, setTimer] = useState(false);

  const [username, setUsername] = useState('"');

  const [page, setPage] = useState(1);

  const callSearchApi = () => {
    setPage(1);
    getSearchApi.setData([]);
    getSearchApi.request(username, page);
  };

  const onChangeText = (text) => {
    setTimer(true);
    setUsername(text);
    console.log("username" + text);
    clearTimeout();
  };

  const onEndReached = () => {
    console.log("end reached");
    if (getSearchApi.data.length > 9) {
      setPage(page + 1);
      setBottomLoader(true);
      getSearchApi.request(username, page);
      setBottomLoader(false);
    }
  };

  const onRefresh = () => {
    getSearchApi.setVal(1);
    setSearchActive(false);
    getSearchApi.setData([]);
    setPage(1);
    setUsername('"');
    getSearchApi.request(username, page);
  };

  useEffect(() => {
    if (!timer) {
      if (username.length !== 0) {
        getSearchApi.setVal(1);
        getSearchApi.request(username, page);
      }
      console.log(username + " " + page);
    } else {
      setTimeout((time) => {
        console.log("timer ended");
        setTimer(false);
        getSearchApi.setVal(1);
      }, 2000);
    }
  }, [timer]);

  return (
    <Screen style={styles.screen}>
      <AppBarComponent
        searchActive={searchActive}
        textHeader={<TextComponent>Contacts</TextComponent>}
        onPress={() => setSearchActive(!searchActive)}
        onChangeText={(text) => onChangeText(text)}
      />
      {getSearchApi.error && (
        <>
          <TextComponent>Could not get data from server.</TextComponent>
          <AppButton title="Retry" onPress={callSearchApi} />
        </>
      )}
      {getSearchApi.data.length === 0 && !getSearchApi.loading && (
        <>
          <TextComponent>Empty List</TextComponent>
        </>
      )}
      {!bottomLoader ? (
        getSearchApi.loading ? (
          <ActivityIndicator
            animating={getSearchApi.loading}
            size={30}
            color={colors.medium}
            style={{ position: "absolute", zIndex: 1, top: 50, left: 165 }}
          />
        ) : null
      ) : null}

      <FlatList
        data={getSearchApi.data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.login}
            subTitle={item.type + " " + item.id}
            image={item.avatar_url}
            onPress={() => console.log("Message selected", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.9}
      />
      {/* {bottomLoader === true ? (
        <ActivityIndicator
          animating={bottomLoader}
          size={30}
          color={colors.medium}
          style={{
            position: "absolute",
            zIndex: 5,
            top: 100,
            left: 180,
            flex: 1,
          }}
        />
      ) : null} */}
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    overflow: "hidden",
    //paddingBottom: 50,
  },
});

export default TaskScreen;
