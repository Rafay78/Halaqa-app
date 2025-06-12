import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MapScreen from "../screens/MapScreen";
import MainScreen from "../screens/MainScreen";
import SignIn from '../screens/AuthScreens/SignIn';
import SignUp from '../screens/AuthScreens/SignUp';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen';
import { useAuthContext } from '../contexts/AuthContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();
function NavigationStack() {

  const {user} = useAuthContext()
  return (
    <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default NavigationStack