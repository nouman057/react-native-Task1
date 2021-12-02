import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserDetailScreen from "./app/classes/userDetailScreen";
import ScreenNavigation from "./app/navigation/screenNavigation";

class App extends React.Component {
  render() {
    return <ScreenNavigation />;
  }
}

export default App;
