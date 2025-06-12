import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

type ButtonTileType = {
    btnTxt: string,
    navigateTo?: string,
    handleOnPress?: Function
}

function ButtonTile(props:ButtonTileType) {
    const {btnTxt, navigateTo, handleOnPress} = props
  const navigation = useNavigation()

  return (
    <TouchableOpacity activeOpacity={.8} onPress={()=>{
      handleOnPress ? handleOnPress() : navigation.navigate(navigateTo)
      console.log("in the component tile");
      
      }} style={tw`flex justify-center items-center bg-[#00c04b] px-15 py-5 rounded-lg m-2`}>
    <Text style={tw`text-white`}>{btnTxt}</Text>
</TouchableOpacity>
  )
}

export default ButtonTile