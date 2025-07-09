import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurahScreen from '../screens/SurahScreen';
import QuranScreen from '../screens/QuranScreen';
import HadeethScreen from '../screens/HadeethScreen';


const Stack = createNativeStackNavigator();

export default function QuranHadeethStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="quranScreen">
      <Stack.Screen name="quranScreen" component={QuranScreen}/>
      <Stack.Screen name="SurahScreen" component={SurahScreen}/>
      {/* <Stack.Screen name="hadeethScreen" component={HadeethScreen}/> */}
    </Stack.Navigator>
  );
}
