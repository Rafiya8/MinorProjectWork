import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign, FontAwesome} from '@expo/vector-icons';

import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import History from '../screens/History';

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const MainStackScreens = ({navigation}) => {
    return(
        <MainStack.Navigator initialRouteName='login'> 
        <MainStack.Screen name='login' options={{headerShown: false}}>
        {(props) => <Login {...props} />}
        </MainStack.Screen>
        <MainStack.Screen name='Dashboard' >
        {(props) => <Tabscreens {...props} />}
        </MainStack.Screen>
        </MainStack.Navigator>
        
    )
}
const Tabscreens = ({navigation}) => {
    return(
        <Tabs.Navigator initialRouteName='Home' screenOptions={({route}) => {return({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name == 'Home') iconName = 'home'
                else if(route.name == 'History') iconName = 'history'
                else iconName = 'user'
                return (
                    <FontAwesome name={iconName} size={size} color={color} />
                )
            } 
        }
        )}}
        tabBarOptions = {{activeTintColor: '#3FC380', inactiveTintColor: '#AAAAAA'}}
        >
            <Tabs.Screen name='Profile' component={Profile}/>
            <Tabs.Screen name='Home' component={Dashboard}/>
            <Tabs.Screen name='History' component={History}/>
        </Tabs.Navigator>
    )
}

export default () => {
    return(
        <NavigationContainer>
        <MainStackScreens />
        </NavigationContainer>
    )
}