import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HadeethScreen from '../screens/HadeethScreen';
import AppTabs from './AppTabs';


const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
  <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="AppTabs">
      <Stack.Screen name="AppTabs" component={AppTabs} /> 
      <Stack.Screen name="HadeethScreen" component={HadeethScreen} />
  </Stack.Navigator>)
}

export default AppNavigator