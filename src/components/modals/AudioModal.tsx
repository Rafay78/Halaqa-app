import React, { useEffect, useState } from 'react'
import tw from '../../lib/tailwind'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AudioTrackPlayer from '../Gadgets/AudioTrackPlayer'
import ImageToggleBtn from '../buttons/ImageToggleBtn'
import { loadAzanSound, pauseAzanSound, playAzanSound } from '../../lib/utils'
import VideoPlayer from 'react-native-video-player'

type Modaltype = {
    isVisible:boolean,
    setIsVisible: Function,
    surahAudio: string,
    ruku: number
} 

function AudioModal({isVisible, setIsVisible, surahAudio, ruku }:Modaltype) {


// useEffect(() => {
//   loadAzanSound(surah)
  
// }, [])

const handleCloseModal = () => {
      setIsVisible(false)
      pauseAzanSound()
  }
  
  


  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
      // onShow={handleShow}
      onRequestClose={handleCloseModal}
      // onDismiss={handleHide}
    >
      <View style={styles.overlay }>
        <View style={styles.container}>
          <Text style={tw`text-black font-lg font-bold`}>Ruku # {ruku}</Text>
            <View style={tw`mt-3 flex justify-center items-center`}>
                          
                <Text style={tw`text-black`} numberOfLines={2}>Translation and Tafseer</Text>
                <AudioTrackPlayer audio={surahAudio}/>

            </View>
          <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: 330,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: 'gray',
    paddingHorizontal: 24,
    paddingVertical: 6,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});


    // <View style={tw`${isVisible ? "flex" : "hidden"} absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center mt-40`}>
    //           <View style={tw`bg-white p-6 rounded-lg shadow-lg w-9.5/10 border`}>
    //                 <TouchableOpacity style={tw`absolute top-1 left-0 rounded-full w-8 h-8 items-center`} onPress={() => {handleCloseModal()}}><Text style={tw`text-black`}>X</Text></TouchableOpacity>

    //                 <View style={tw`mt-3 flex justify-center items-center`}>
                      
    //                   <Text style={tw`text-black`} numberOfLines={2}>Translation and Tafseer</Text>
    //                   <AudioTrackPlayer audio={surahAudio}/>

    //                 </View>

    //           </View>

    // </View >
//   )
// }

export default AudioModal