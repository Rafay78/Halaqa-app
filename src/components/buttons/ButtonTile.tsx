import React from 'react'
import { Button, Text, TouchableOpacity, View, ButtonProps, TextInputProps, TouchableOpacityProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import { navigate } from '../../lib/utils'

type ButtonTileType = {
    btnTxt: string,
    navigateTo?: string | Function,
    handleOnPress?: Function
} & TouchableOpacityProps

function ButtonTile(props:ButtonTileType) {
    const {btnTxt, navigateTo, handleOnPress, style ,...rest} = props
  // const navigation = useNavigation()

  return (
    <TouchableOpacity activeOpacity={.8} onPress={()=>{
      handleOnPress ? handleOnPress() : typeof navigateTo === 'string' ? navigate(navigateTo) : navigate(navigateTo?.name, navigateTo?.params)
      console.log("in the component tile");
      
      }} style={[tw`flex min-w-40 justify-center items-center bg-[#00c04b] py-5 px-2 rounded-lg m-2`, style]} {...rest}>
    <Text style={tw`text-white`}>{btnTxt}</Text>
</TouchableOpacity>
  )
}

export default ButtonTile