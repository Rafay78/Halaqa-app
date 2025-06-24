import React, { useState } from 'react'
import tw from '../../lib/tailwind'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import AudioTrackPlayer from '../Gadgets/AudioTrackPlayer'
import ImageToggleBtn from '../buttons/ImageToggleBtn'

type Modaltype = {
    isVisible:boolean,
    setIsVisible: Function
} 

function Modal({isVisible, setIsVisible}:Modaltype) {
  const [isAudioPlay, setIsAudioPlay] = useState(false)
  return (
    <View style={tw`${isVisible ? "flex" : "hidden"} absolute inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center`}>
              <View style={tw`bg-white p-6 rounded-lg shadow-lg w-9.5/10 border`}>
                    <TouchableOpacity style={tw`absolute top-1 left-0 rounded-full w-8 h-8 items-center`} onPress={() => setIsVisible(!isVisible)}><Text style={tw`text-black`}>X</Text></TouchableOpacity>
                    <Text>Listen to this Ruku</Text>
                    <AudioTrackPlayer/>

                    <View style={tw`mt-3 flex justify-center items-center`}>
                      
                      <ImageToggleBtn toggle={isAudioPlay} defImage={require('../../assets/images/play.png')} onToggleImage={require('../../assets/images/pause.png')} handlePress={() => setIsAudioPlay(!isAudioPlay)} />
                      <Text style={tw`text-black`} numberOfLines={2}>Translation and Tafseer</Text>

                    </View>

              </View>

    </View >
  )
}

export default Modal