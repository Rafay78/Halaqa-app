import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import WebView from 'react-native-webview'
import tw from '../lib/tailwind'
import { useQuery } from '@tanstack/react-query';
import { URL_STRING } from '../lib/utils';
import { FlashList } from '@shopify/flash-list';
import ButtonTile from '../components/buttons/ButtonTile';

function HalaqaMapScreen() {
    const [locations, setLocations] = useState([
        { name: 'Masjid Al Haram', lat: 21.4225, long: 39.8262 },
        { name: 'Masjid An Nabawi', lat: 24.4672, long: 39.6111 },
        { name: 'Masjid Quba', lat: 24.4442, long: 39.6165 },
      ]);
    const webViewRef = useRef(null);

     // Fetch masajid using useQuery at the top level
  const { data: masjids, isSuccess } = useQuery({
    queryKey: ['fetchHalaqa'],
    queryFn: async () => {
      const res = await fetch(`${URL_STRING}/fetch-all-halaqah`);
      console.log("API triggered !!");
      console.log({res});
      const resData = await res.json()
      setLocations(resData)
      return resData;
      
    },
    staleTime: 0, 
    retry: false, 
  });

  // Send data to WebView when data is ready
  useEffect(() => {
    if (webViewRef.current ) {
      const message = JSON.stringify(locations);
      // console.log(masjids);
      
      webViewRef.current.postMessage(message);
      console.log("I am in the effect bro and got ref");
    
    }
    console.log("I am in the effect bro", isSuccess);
    
  }, [isSuccess, masjids]);


  const handleLocationPress = (location) => {
    // setSearchText(location.name);
    // setModules([]);
    console.log(location);
    

    const script = `
    highlightDursLocation(${location.lat}, ${location.long}, ${JSON.stringify(location.name)}, ${JSON.stringify(location.contact)}, ${JSON.stringify(location.ladies)});
      true;
    `;

    webViewRef?.current?.injectJavaScript(script);
  };


  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>

<View style={tw`h-3/4`}>
        <WebView
          ref={webViewRef}
          source={{ uri: 'file:///android_asset/map.html' }}
          originWhitelist={['*']}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          // onLoad={()=>sendMasajidToWebView()}
          style={tw`flex-1`}
        />
      </View>

      <ScrollView style={tw`relative`} >
        <Text style={tw`text-center font-bold sticky`}>Halaqah e Qurani Near you:</Text>
        <FlashList
      data={locations}
      renderItem={({ item }) => <ButtonTile handleOnPress={() => handleLocationPress(item)} navigateTo='' btnTxt={item.name}/>}
      estimatedItemSize={200}
    />
      </ScrollView>
      </SafeAreaView>
      )
}

export default HalaqaMapScreen