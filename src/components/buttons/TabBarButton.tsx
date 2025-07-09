import React from 'react'
import { View, Image, Text, ImageSourcePropType } from 'react-native'
import tw from '../../lib/tailwind'

type TabButtonProps= {
    focused: boolean,
    label: string,
    imageURI : ImageSourcePropType
}

function TabBarButton(props:TabButtonProps) {
    const {focused, imageURI, label} = props
    
    
  return (
    
    <View style={tw`flex-col justify-center mb--10`}>
              <Image source={imageURI} resizeMode='contian' style={
                {
                  width:45,
                  height:40,
                }
              }/>
              <Text style={[tw`${focused ? 'text-[#4e4]':'text-black'} text-[13px] font-bold w-20 pl-1`, {}]}>{label}</Text>
            </View>
  )
}

export default TabBarButton