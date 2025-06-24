import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/AuthScreens/SignIn';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen';
import SignUp from '../screens/AuthScreens/SignUp';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="signInScreen">
      <Stack.Screen name="signInScreen" component={SignIn}/>
      <Stack.Screen name="signUpScreen" component={SignUp}/>
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
    </Stack.Navigator>
  );
}
