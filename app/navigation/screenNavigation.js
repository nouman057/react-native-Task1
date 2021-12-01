import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Task from "../classes/taskClass";
import UserDetailScreen from "../classes/userDetailScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator mode="Modal">
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
  </NavigationContainer>
);

export default ScreenNavigation;
