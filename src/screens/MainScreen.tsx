import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import ButtonTile from '../components/buttons/ButtonTile'
import { homeTileData } from '../lib/utils'
import { SafeAreaView } from 'react-native-safe-area-context'

function MainScreen() {
  return (
    <SafeAreaView style={tw`flex-1 items-center`}>
        <Text style={tw`text-black font-bold text-lg m-1`}>Step Islam</Text>
        
        <FlatList contentContainerStyle={tw`mt-30`} 
        numColumns={2} 
        data={homeTileData} 
        renderItem={({item}) => <ButtonTile 
        navigateTo={item.navigate2}
        style={tw`h-30`}
        btnTxt={item.TileTxt}/>
      } />




        {/* {
          screen: 'SurahScreen',
          params: { name: item.transliteration, index}
        })} */} 
        {/* implement sub screen navigation */}
        {/* <AppTabs/> */}
    </SafeAreaView>
  )
}

export default MainScreen