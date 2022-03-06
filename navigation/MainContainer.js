import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
//Icon package
import Icon from "react-native-vector-icons/FontAwesome";
//Screens
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ListsScreen from "./screens/DetailsScreen";

//Screen names
const lists = "Lists";
const shopping = "Shopping";
const profile = "Profile";
const Tab = createBottomTabNavigator();

const MainContainer = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName={lists}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === lists) {
            iconName = "list";
          } else if (route.name === shopping) {
            iconName = "shopping-cart";
          } else if (route.name === profile) {
            iconName = "user";
          }
          return <Icon style={styles.icons} name={iconName} />;
        },
      })}
    >
      <Tab.Screen name={lists} component={HomeScreen} />
      <Tab.Screen name={shopping} component={ListsScreen} />
      <Tab.Screen name={profile} component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  icons: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MainContainer;
