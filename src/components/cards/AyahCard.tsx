import React, { useState } from 'react'
import { View, Text, ScrollView, Dimensions, Pressable, Alert, TouchableOpacity } from 'react-native'
import tw from '../../lib/tailwind'
import Modal from '../modals/Modal'

type AyahCardProp ={
    item: any,

}
const { height } = Dimensions.get('window')
const cardHeight = (1 / 3) * height; //min-h-[${2/3 * height}]

function AyahCard(props:AyahCardProp) {
    const {item} = props
    const [isOptions, setIsOptions] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleToggleOptions = () => setIsOptions(!isOptions)

  return (
    <>
    <View style={[tw`bg-[#FAF9F6] mt-0 rounded-2xl p-4 border-2 border-[#E2DFD2] relative`, { minHeight: cardHeight }]}>
        <View style={tw`flex-row justify-center`}>
        <Text style={tw`text-black text-center text-lg w-9/10`}>{item.surahName}</Text>

        <Pressable onPress={()=>{ 
            // setIsModalVisible(true);
            handleToggleOptions()
            }} style={tw`rounded-full p-2 pt-0 mt--2`}>
            <Text style={tw`text-black font-bold text-lg`}>...</Text>
        </Pressable>
        </View>
        <View style={tw`${isOptions ? 'flex':'hidden'} bg-[#F3E5AB]  p-3 w-2/3 absolute right-3 top-8 rounded-md z-10`}>
            <TouchableOpacity onPress={() => {setIsModalVisible(true); setIsOptions(!isOptions)}} style={tw`p-3 border-b`}><Text>Qirat / Audio Tafseer</Text></TouchableOpacity>
            <TouchableOpacity style={tw`p-3 border-b`}><Text>Video Tafseer</Text></TouchableOpacity>
            <TouchableOpacity style={tw`p-3`}><Text>Qirat / Audio Tafseer</Text></TouchableOpacity>
        </View>
        <View style={tw`m-2 border border-black w-full`}/>
        <Text style={tw`text-black text-right text-md text-lg font-bold`}>{item.arabic}</Text>
        <View style={tw`m-2 border border-black w-full`}/>
        <Text style={tw`text-black text-left text-sm `}>{item.translation}</Text>
    </View>
    {isModalVisible && <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}
              />}
    </>
)
}

export default AyahCard