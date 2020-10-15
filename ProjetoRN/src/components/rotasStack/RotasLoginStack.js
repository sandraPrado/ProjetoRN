import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../views/Login/Login';
import Inicial from '../../views/Inicial/Inicial';
import estiloRotasStack from './estiloRotasStack';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Stack = createStackNavigator();

const RotasLoginStack = () => {

    return (
        <Stack.Navigator initalRouteName="Inicial">
            <Stack.Screen
                name="Login"
                component={Login}
                options={ { cardStyle: estiloRotasStack.screenLogin,
                            headerShown: false  }} 
            />
            <Stack.Screen
                name="Inicial"
                component={Inicial}
                options= { { cardStyle: estiloRotasStack.screenInicial,
                                       headerShown: false  }} 
            />
        </Stack.Navigator>
    )
}