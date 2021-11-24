import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import userListApi from "./api/userListApi";
import Screen from "./components/Screen";
import TextComponent from "./components/textComponent";
import ListItemSeparator from "./components/ListItemSeparator";
import useApi from "./hooks/useApi";
import ListItem from "./components/ListItem";
import AppBarComponent from "./components/appBarComponent";
import searchUserApi from "./api/searchUserApi";
import AppButton from "./components/AppButton";

function TaskScreen(props) {
  const getSearchApi = useApi(searchUserApi.searchUser);

  const [searchActive, setSearchActive] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [username, setUsername] = useState('"');

  const [page, setPage] = useState(1);

  const callSearchApi = () => {
    setPage(1);
    getSearchApi.request(username, page);
  };

  const onEndReached = () => {
    if (getSearchApi.data.items.length > 9) {
      setPage(page + 1);
      getSearchApi.request(username, page);
    }
  };

  useEffect(() => {
    getSearchApi.request(username, page);
  }, []);

  return (
    <Screen style={styles.screen}>
      <AppBarComponent
        searchActive={searchActive}
        textHeader={<TextComponent>Contacts</TextComponent>}
        onPress={() => setSearchActive(!searchActive)}
        onChangeText={(text) => {
          setUsername(text);
          setPage(1);
          callSearchApi();
        }}
      />
      {getSearchApi.error && (
        <>
          <TextComponent>Could not get data from server.</TextComponent>
          <AppButton title="Retry" onPress={callSearchApi} />
        </>
      )}

      <ActivityIndicator animating={getSearchApi.loading} size={30} />

      <FlatList
        data={getSearchApi.data.items}
        keyExtractor={(messages) => messages.id.toString()}
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
        onRefresh={() => {
          setPage(1);
          setUsername('"');
          getSearchApi.request(username, page);
        }}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        scrollsToTop={true}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    overflow: "hidden",
  },
});

export default TaskScreen;
