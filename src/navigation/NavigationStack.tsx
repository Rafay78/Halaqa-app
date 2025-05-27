import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MapScreen from "../screens/MapScreen";
import MainScreen from "../screens/MainScreen";

const Stack = createNativeStackNavigator();
function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="MainScreen">
      <Stack.Screen name="mapScreen" component={MapScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen}/>
        
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack