import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from '../contexts/AuthContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import AppTabs from './AppTabs';

const Stack = createNativeStackNavigator();
function NavigationStack() {

  const {user} = useAuthContext()
  return (
    <NavigationContainer>
      <AppTabs /> 
        {/* {user ? <AppTabs /> : <AuthStack />} */}
    </NavigationContainer>
  )
}

export default NavigationStack