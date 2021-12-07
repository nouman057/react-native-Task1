import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import UserDetailScreen from "./app/classes/userDetailScreen";
import {
  NavigationDrawer,
  // NavigationDrawer,
  ScreenNavigation,
} from "./app/navigation/screenNavigation";

class App extends React.Component {
  render() {
    return <NavigationDrawer />;
  }
}

export default App;
