import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailsScreen from './screens/DetailsScreen';

const homeName = 'Home';
const detailsName = 'Details';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const MainContainer = () => (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route})=> ({
            tabBarIcon: ({focused})=>{
                let iconName;
                if(route.name === homeName){
                    iconName = focused? 'home' : 'home-outline';
                }else if(route.name === detailsName){
                    iconName = focused? 'list' : 'list-outline';
                }else if(route.name === profileName){
                    iconName = focused? 'settings' : 'settings-outline';
                }
                return <Icon name="rocket"/>
            }
        })}>

        <Tab.Screen name={homeName} component={HomeScreen}/>
        <Tab.Screen name={detailsName} component={DetailsScreen}/>
        <Tab.Screen name={profileName} component={ProfileScreen}/>

        </Tab.Navigator>
    </NavigationContainer>
  );


export default MainContainer;
