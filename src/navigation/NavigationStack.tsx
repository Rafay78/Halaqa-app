import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from '../contexts/AuthContext';
import AppStack from './QuranStack';
import AuthStack from './AuthStack';
import AppTabs from './AppTabs';
import { navigationRef } from '../lib/utils';
import AppNavigator from './AppNavigator';


function NavigationStack() {

  const {user} = useAuthContext()
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator/>
      {/* <AppTabs />  */}
        {/* {user ? <AppTabs /> : <AuthStack />} */}
    </NavigationContainer>
  )
}

export default NavigationStack