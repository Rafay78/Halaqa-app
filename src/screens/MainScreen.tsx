import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import ButtonTile from '../components/buttons/ButtonTile'
import AppTabs from '../navigation/AppTabs'

function MainScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
        <ButtonTile title='' navigateTo='mapScreen' btnTxt='Masjid Finder'/>
        <ButtonTile title='' navigateTo='halaqaMapScreen' btnTxt='Halaqa Qurani'/>
        {/* <AppTabs/> */}
    </View>
  )
}

export default MainScreen