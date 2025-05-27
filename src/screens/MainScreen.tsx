import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import ButtonTile from '../components/ButtonTile'

function MainScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
        <ButtonTile navigateTo='mapScreen' btnTxt='Masjid Finder'/>
        <ButtonTile navigateTo='' btnTxt='Halaqa Qurani'/>
    </View>
  )
}

export default MainScreen