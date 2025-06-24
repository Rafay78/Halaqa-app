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
    // bg-[#000]
    <View style={tw`flex justify-center mb--10`}>
              <Image source={imageURI} resizeMode='contian' style={
                {
                  width:45,
                  height:40,
                //   tintColor: focused ? "#4e4" : ''
                // backgroundColor: focused ? "#4e4" : '#fff'
    
                }
              }/>
              <Text style={[tw`text-[13px] font-bold w-20 `, {}]}>{label}</Text>
            </View>
  )
}

export default TabBarButton