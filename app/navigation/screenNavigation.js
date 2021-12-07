import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Task from "../classes/taskClass";
import UserDetailScreen from "../classes/userDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "../classes/aboutScreen";

import DrawerComponent from "../components/drawerComponent";
import TabScreen1 from "../classes/tabScreen1";
import TabScreen2 from "../classes/tabScreen2";
import TabScreen3 from "../classes/tabSceen3";
import colors from "../components/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

const ScreenNavigation = () => (
  <Stack.Navigator screenOptions={{ presentation: "modal" }}>
    <Stack.Screen
      name="Contacts"
      component={Task}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Contact Details"
      component={UserDetailScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const NavigationDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "orange",
          swipeEnabled: false,
        }}
        drawerContent={(props) => <DrawerComponent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={ScreenNavigation}
          options={{
            drawerIcon: () => {
              <MaterialCommunityIcons name="home" size={25} color="red" />;
            },
          }}
        />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen
          name="Tabs"
          component={TopTabNavigator}
          options={{
            headerShown: true,
            headerTitle: "Tab Navigation",
            headerTitleAlign: "center",
            headerTintColor: colors.medium,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Users" component={TabScreen1} />
      <TopTab.Screen name="Companies" component={TabScreen2} />
      <TopTab.Screen name="Licenses" component={TabScreen3} />
    </TopTab.Navigator>
  );
};

export { ScreenNavigation, NavigationDrawer };
