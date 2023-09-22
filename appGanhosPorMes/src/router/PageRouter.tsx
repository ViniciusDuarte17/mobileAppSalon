import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import { Login } from "../pages/Login" 
import { Signup } from "../pages/Signup" 
import { Home } from "../pages/Home";

export default function PageRouter(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cadastro"
          component={Signup}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}