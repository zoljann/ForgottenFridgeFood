import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components";
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

const StyledIcons = styled(Icon)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

const MainContainer = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName={lists}
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === lists) {
            iconName = "list";
          } else if (route.name === shopping) {
            iconName = "shopping-cart";
          } else if (route.name === profile) {
            iconName = "user";
          }
          return <StyledIcons name={iconName} />;
        },
      })}
    >
      <Tab.Screen name={lists} component={HomeScreen} />
      <Tab.Screen name={shopping} component={ListsScreen} />
      <Tab.Screen name={profile} component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default MainContainer;
