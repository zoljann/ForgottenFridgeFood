import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components";
//Icon package
import Icon from "react-native-vector-icons/FontAwesome";
//Screens
import ShoppingScreen from "./screens/ShoppingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ListsScreen from "./screens/ListsScreen";
import WriteFoodScreen from "./screens/WriteFoodScreen";

//Screen names
const lists = "Lists";
const shopping = "Shopping";
const profile = "Profile";
const Tab = createBottomTabNavigator();

const StyledIcons = styled(Icon)`
  font-size: 25px;
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
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "#479FEC",
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name={lists} component={ListsScreen} />
      <Tab.Screen name={shopping} component={ShoppingScreen} />
      <Tab.Screen name={profile} component={ProfileScreen} />
      <Tab.Screen
        options={() => ({
          tabBarButton: () => null,
        })}
        name="WriteFood"
        component={WriteFoodScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default MainContainer;
