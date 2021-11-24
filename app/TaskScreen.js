import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import userListApi from "./api/userListApi";
import Screen from "./components/Screen";
import TextComponent from "./components/textComponent";
import ListItemSeparator from "./components/ListItemSeparator";
import useApi from "./hooks/useApi";
import ListItem from "./components/ListItem";
import AppBarComponent from "./components/appBarComponent";

function TaskScreen(props) {
  const {
    error,
    loading,
    request: loadUsers,
    data: messages,
  } = useApi(userListApi.getUsers);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  // searchFunc = (value) => {
  //   const filteredValue = messages.filter((text) => {
  //     let messagesLowercase = text.login.toLowerCase();
  //     let searchText = value.toLowerCase();

  //     return messagesLowercase.indexOf(searchText) > -1;
  //   });
  //   setFilteredData(filteredValue);
  //   console.log(filteredData);
  // };

  return (
    <Screen style={styles.screen}>
      <AppBarComponent
        searchActive={searchActive}
        textHeader={<TextComponent>Contacts</TextComponent>}
        onPress={() => setSearchActive(!searchActive)}
      />
      {error && (
        <>
          <TextComponent>Could not get data from server.</TextComponent>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <FlatList
        data={messages}
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
