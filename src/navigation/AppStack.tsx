import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import DashboardScreen from '../components/prayerTracker/DashboardScreen';
import PrayerScreen from '../screens/salah/PrayerScreen';
import HalaqaMapScreen from '../screens/HalaqaMapScreen';


const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="MainScreen">
      <Stack.Screen name="mapScreen" component={MapScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen}/>
      {/* <Stack.Screen name="dashboardScreen" component={DashboardScreen}/> */}
      <Stack.Screen name="prayer" component={PrayerScreen}/>
      <Stack.Screen name="halaqaMapScreen" component={HalaqaMapScreen}/>
    </Stack.Navigator>
  );
}
