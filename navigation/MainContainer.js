import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components";
//Icon package
import Icon from "react-native-vector-icons/FontAwesome";
//Screens
import ShoppingScreen from "./screens/ShoppingScreen";
import ImpactScreen from "./screens/ImpactScreen";
import ListsScreen from "./screens/ListsScreen";
import WriteFoodScreen from "./screens/WriteFoodScreen";

//Screen names
const lists = "Lists";
const shopping = "Shopping";
const impact = "Impact";
const Tab = createBottomTabNavigator();

const StyledIcons = styled(Icon)`
  font-size: 25px;
  color: ${(props) => props.theme.colors.primary};
`;

const MainContainer = () => {
  return (
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
            } else if (route.name === impact) {
              iconName = "globe";
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
        <Tab.Screen name={impact} component={ImpactScreen} />
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
          })}
          name="WriteFood"
          component={WriteFoodScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
