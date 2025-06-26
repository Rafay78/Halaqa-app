import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native'
const {width, height } = Dimensions.get('window')
import tw from '../lib/tailwind';
import QuranCarousel from '../components/QuranCarousel';
import AyahCard from '../components/cards/AyahCard';
import { navigate, rukus } from '../lib/utils';
import Modal from '../components/modals/Modal';
import SurahScreen from './SurahScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDeviceContext } from 'twrnc';


function QuranScreen() {
useDeviceContext(tw)
const data = [
  {
    surah:"Surah Al Fatiha",
    verses: 7,
    rukus:1
  },
  {
    surah:"Surah Al Baqarah",
    verses: 286,
    rukus: 40
  },
  {
    surah:"Surah Al Aal e Imraan",
    verses: 200,
    rukus: 20
  }
]
  return (


      <SafeAreaView style={tw`flex-1 p-2`}>
        <FlatList style={tw`flex-1 `} data={data} renderItem={({item}) => 
        <TouchableOpacity onPress={() => navigate('MainHome', {
          screen: 'SurahScreen',
          params: { }
        })}
         style={tw`rounded-md p-4 bg-[#FFFFFF] mb-2 shadow shadow-[#000] border border-[#FFFDD0]`}>
          <View style={tw`flex-row justify-between`}>
          <Text style={tw`self-center self-start text-black text-md`}>{item.surah}</Text>
          <Text style={tw`self-center self-start text-black text-sm`}>Total Ayaat: {item.verses}</Text>
          </View>
          <Text style={tw`self-center self-start text-black text-sm`}>Total Ruku: {item.rukus}</Text>
        </TouchableOpacity>} 
        />
          {/* <SurahScreen/> */}
      </SafeAreaView>
  )
}

export default QuranScreen