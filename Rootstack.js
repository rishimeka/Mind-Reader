import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Screens/Login_Screen";
import Home from "./Screens/Home";
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                        title: "",
                    },
                    headerTintColor: 'transparent',
                    headerTransparent: true,
                    headerTitle:'',
                    headerTitleStyle: {
                        fontWeight: '800',
                        fontSize: 26,
                        color: 'transparent',
                        marginTop: 5,
                        marginLeft: "5%",
                        marginBottom: 30
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                        paddingTop: 20
                    },
                }}
                initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default RootStack;
