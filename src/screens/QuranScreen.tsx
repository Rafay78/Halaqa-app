import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native'
const {width, height } = Dimensions.get('window')
import tw from '../lib/tailwind';
import QuranCarousel from '../components/QuranCarousel';
import AyahCard from '../components/cards/AyahCard';
import { navigate, rukus } from '../lib/utils';
import Modal from '../components/modals/AudioModal';
import SurahScreen from './SurahScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDeviceContext } from 'twrnc';
import quran from '../assets/quran_metadata/quran_surah_metadata.json'


function QuranScreen() {
useDeviceContext(tw)


  return (


      <SafeAreaView style={tw`flex-1 p-2`}>
        <FlatList style={tw`flex-1`} data={quran} renderItem={({item , index}) => 
        <TouchableOpacity onPress={() => navigate('quran', {
          screen: 'SurahScreen',
          params: { name: item.transliteration, index}
        })}
         style={tw`rounded-md p-4 bg-[#FFFFFF] mb-2 shadow shadow-[#000] border border-[#FFFDD0]`}>
          <View style={tw`flex-row justify-between`}>
          <Text style={tw`self-center self-start text-black text-md`}>Surah {item.transliteration}</Text>
          <Text style={tw`self-center self-start text-black text-sm`}>Total Ayaat: {item.ayah_count}</Text>
          </View>
          <Text style={tw`self-center self-start text-black text-sm`}>Total Ruku: {item.ruku_count}</Text>
        </TouchableOpacity>} 
        />
          {/* <SurahScreen/> */}
      </SafeAreaView>
  )
}

export default QuranScreen