import React from 'react'
import { View , Text, FlatList} from 'react-native'
import { Coordinates, CalculationMethod, PrayerTimes } from 'adhan';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../../lib/tailwind';
import adhan from 'adhan';


function PrayerScreen() {
  const coordinates = new adhan.Coordinates(24.8607, 67.0011);
  const params = adhan.CalculationMethod.Karachi();
  const date = new Date(2025, 6, 20);
  var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
  console.log(prayerTimes);
const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  return (
    <SafeAreaView>
        <View style={tw`self-center `}>
            <Text style={tw`font-bold text-lg`}>Namaz Tracker</Text>
        </View>
        <FlatList style={tw``} data={prayers} numColumns={2} key={1} renderItem={() =>             <View style={tw`p-10 bg-[#2d3939] m-1 rounded-md`}></View>
}/>
        {/* <View style={tw`p-1`}>
            <View style={tw`p-10 bg-[#2d3939] m-1 rounded-md`}></View>
            <View style={tw`p-10 bg-[#2d3939] m-1 rounded-md`}></View>
            <View style={tw`p-10 bg-[#2d3939] m-1 rounded-md`}></View>
            <View style={tw`p-10 bg-[#2d3939] m-1 rounded-md`}></View>
            <View style={tw`p-10 bg-[#2d3939] m-1 rounded-md`}></View>
        </View> */}
    </SafeAreaView>
  )
}

export default PrayerScreen