import React, { useEffect, useState } from 'react'
import { Text, FlatList, View, Modal, ActivityIndicator } from 'react-native'
import AyahCard from '../components/cards/AyahCard'
import tw from '../lib/tailwind'
import { rukuDefault, rukuTypes } from '../lib/utils'
import surahRukus from '../assets/quran_metadata/quran_rukus_all_data.json'
import { SafeAreaView } from 'react-native-safe-area-context'

function SurahScreen({route}) {
  const {name, index} = route.params
  const [rukus, setRukus] = useState<rukuTypes[]>([rukuDefault] || surahRukus[index]["rukus"])
console.log(index);

  useEffect(() => {
      setRukus(surahRukus[index]["rukus"])
  }, [index])

  if (!rukus){
    <SafeAreaView>
      <ActivityIndicator/>
    </SafeAreaView>
  }
  
  return (
    <>
    <Text style={tw`flex text-lg self-center text-black font-bold`}>Ruku by Ruku Quran</Text>
          <FlatList style={tw`flex-1`} data={rukus} renderItem={({item}) => 
          <>
            <AyahCard item={item}  name={name} surahIndex={index}/>
          </>
        }
        keyExtractor={item => item.surahName}
        ItemSeparatorComponent={() => <View style={tw`p-3`}/>}
        />
              </>
  )
}

export default SurahScreen