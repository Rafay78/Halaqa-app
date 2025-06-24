import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from '../lib/tailwind'
import { useNavigation } from '@react-navigation/native'

type LineTypes = {
    assertion: string,
    navigatorText: string,
    navigateTo?: string
}

function AuthNavigatorLine(props:LineTypes) {
    const {navigatorText, assertion, navigateTo} = props
    const navigation =useNavigation()
  return (
    <View style={tw`flex-row justify-center`}>

    <Text style={tw`text-black text-sm`}>{assertion} </Text>

    <TouchableOpacity  onPress={()=> navigation.navigate(`${navigateTo}`)}>
      <Text style={tw`underline text-black text-sm`}>{navigatorText}</Text>
    </TouchableOpacity>

  </View>  )
}

export default AuthNavigatorLine