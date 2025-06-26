import React, { useState } from 'react'
import { Text, FlatList, View, Modal } from 'react-native'
import AyahCard from '../components/cards/AyahCard'
import tw from '../lib/tailwind'
import { rukus } from '../lib/utils'

function SurahScreen() {
  return (
    <>
    <Text style={tw`flex text-lg self-center`}>Ruku by Ruku Quran</Text>
          <FlatList style={tw`flex-1`} data={rukus} renderItem={({item}) => 
          <>
            <AyahCard item={item} />
          </>
        }
        keyExtractor={item => item.surahName}
        ItemSeparatorComponent={() => <View style={tw`p-3`}/>}
        />
              </>
  )
}

export default SurahScreen