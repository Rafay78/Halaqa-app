import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import DashboardScreen from '../components/prayerTracker/DashboardScreen';
import PrayerScreen from '../screens/salah/PrayerScreen';
import HalaqaMapScreen from '../screens/HalaqaMapScreen';
import SurahScreen from '../screens/SurahScreen';
import AppTabs from './AppTabs';
import QuranScreen from '../screens/QuranScreen';


const Stack = createNativeStackNavigator();

export default function QuranStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="quranScreen">
      <Stack.Screen name="quranScreen" component={QuranScreen}/>
      <Stack.Screen name="SurahScreen" component={SurahScreen}/>
    </Stack.Navigator>
  );
}
