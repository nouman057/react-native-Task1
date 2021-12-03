import React from "react";
import { createNativeStackNavigator } from "@react-navigation/stack";
import Task from "../classes/taskClass";
import UserDetailScreen from "../classes/userDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "../classes/aboutScreen";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

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

// const NavigationDrawer = () => {
//   <NavigationContainer>
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={ScreenNavigation} />
//       <Drawer.Screen name="About" component={AboutScreen} />
//     </Drawer.Navigator>
//   </NavigationContainer>;
// };

export { ScreenNavigation };
