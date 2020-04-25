import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './telas/Login';
import Loja  from './telas/Loja';
import Produto from './telas/Produto';

const Stack = createStackNavigator();

export default function Router(){

    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Loja" component={Loja}/>
            <Stack.Screen name="Produto" component={Produto}/>


        </Stack.Navigator>
    </NavigationContainer>
    )
  
}