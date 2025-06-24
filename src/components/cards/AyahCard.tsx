import React, { useState } from 'react'
import { View, Text, ScrollView, Dimensions, Pressable, Alert } from 'react-native'
import tw from '../../lib/tailwind'

type AyahCardProp ={
    item: any,
    setIsModalVisible: Function
}
const { height } = Dimensions.get('window')
const cardHeight = (1 / 3) * height; //min-h-[${2/3 * height}]

function AyahCard(props:AyahCardProp) {
    const {item, setIsModalVisible} = props
  return (
    <>
    <View style={[tw`bg-[#FAF9F6] mt-0 rounded-2xl p-4 border-2 border-double border-[#E2DFD2]`, { minHeight: cardHeight }]}>
        <View style={tw`flex-row justify-center`}>
        <Text style={tw`text-black text-center text-lg w-9/10`}>{item.surahName}</Text>

        <Pressable onPress={()=> setIsModalVisible(true)} style={tw`rounded-full p-2 pt-0 mt--2`}>
            <Text style={tw`text-black font-bold text-lg`}>...</Text>
        </Pressable>

        </View>
        <View style={tw`m-2 border border-black w-full`}/>
        <Text style={tw`text-black text-right text-md text-lg font-bold`}>{item.arabic}</Text>
        <View style={tw`m-2 border border-black w-full`}/>
        <Text style={tw`text-black text-left text-sm `}>{item.translation}</Text>
    </View>
    </>
)
}

export default AyahCard