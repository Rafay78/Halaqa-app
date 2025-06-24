import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, View, FlatList } from 'react-native'
const {width, height } = Dimensions.get('window')
import tw from '../lib/tailwind';
import QuranCarousel from '../components/QuranCarousel';
import AyahCard from '../components/cards/AyahCard';
import { rukus } from '../lib/utils';
import Modal from '../components/modals/Modal';


function QuranScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (


      <View style={tw`flex-1 p-2`}>
        <Text style={tw`flex text-lg self-center`}>Ruku by Ruku Quran</Text>
      <FlatList style={tw`flex-1`} data={rukus} renderItem={({item}) => 
      <AyahCard item={item} setIsModalVisible={setIsModalVisible}/>
    }
    keyExtractor={item => item.surahName}
    ItemSeparatorComponent={() => <View style={tw`p-3`}/>}/>
   {isModalVisible && <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}/>}
      </View>
  )
}

export default QuranScreen