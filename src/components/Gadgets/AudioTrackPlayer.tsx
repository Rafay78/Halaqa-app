import React, { useEffect, useState } from 'react'
import { View, Image, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native'
import tw from '../../lib/tailwind'
import { pauseAzanSound, playAzanSound } from '../../lib/utils'
import ImageToggleBtn from '../buttons/ImageToggleBtn'
// import Sound from 'react-native-sound'
// import { pauseAzanSound, playAzanSound } from '../../lib/utils'
// import { setupPlayer } from 'react-native-track-player/lib/src/trackPlayer'
// import { addTrack, setupPlayer } from '../../../service'
// import TrackPlayer from 'react-native-track-player'

function AudioTrackPlayer() {
    const [isPlay, setPlay] = useState(false)

//     const [isPlayerReady, setIsPaylerReady] = useState(false)

//   async function setup(){
//     let isSetup = await setupPlayer()

//     if (isSetup) {
//       await addTrack()
//     }

//     setIsPaylerReady(isSetup)
//   }

//   useEffect(() => {
//     setup()
//   }, [])
  
 

    const handlePlayButtonPress = async () =>
        {
        setPlay(!isPlay)
        if (!isPlay){
            playAzanSound()
        // await TrackPlayer.add({
        //     id: 'track1',
        //     url: require('../../assets/audio/AlFatiha.mp3'),
        //     title: 'My Track',
        //     artist: 'Unknown',
        //   });
        //   TrackPlayer.play()
        } else
        {
            pauseAzanSound()
            // TrackPlayer.pause();

          }
    }


  return (
                    <View style={tw`w-full bg-[#8A9A5B] p-3 flex-row justify-around items-center rounded`}>
                        <TouchableOpacity activeOpacity={.5}>
                            <Image source={require('../../assets/images/rewind.png')} style={tw`h-8 w-8`} />
                        </TouchableOpacity>                        
                        
                        
                        <ImageToggleBtn defImage={require('../../assets/images/play.png')} onToggleImage={require('../../assets/images/pause.png')} handlePress={handlePlayButtonPress} />


                        
                        <TouchableOpacity activeOpacity={.5}>
                            <Image source={require('../../assets/images/forward.png')} style={tw`h-8 w-8`} />
                        </TouchableOpacity>
                    </View>  )
}

export default AudioTrackPlayer