import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { WebView } from 'react-native-webview';
import tw from 'twrnc';  // Tailwind CSS library
import ButtonTile from '../components/buttons/ButtonTile';


import {
  useQuery,
} from '@tanstack/react-query'
import { FlashList } from '@shopify/flash-list';
import { URL_STRING } from '../lib/utils';

// Dummy modules list for search
// const dummyModules = [
//   'React',
//   'React Native',
//   'Redux',
//   'Axios',
//   'Node.js',
//   'Express',
//   'MongoDB',
// ];

const MapScreen = () => {
  // State variables
  const webViewRef = useRef(null);

  const [locations, setLocations] = useState([
    { name: 'Masjid Al Haram', lat: 21.4225, long: 39.8262 },
    { name: 'Masjid An Nabawi', lat: 24.4672, long: 39.6111 },
    { name: 'Masjid Quba', lat: 24.4442, long: 39.6165 },
  ]);
  
  const [searchText, setSearchText] = useState('');
  const [debouncedText, setDebouncedText] = useState('');
  const [modules, setModules] = useState<{name:'',lat:0, long:0}[]>([{name:'',lat:0, long:0}]);

  // Debounce effect (300ms delay)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedText(searchText);
    }, 300);
    return () => clearTimeout(timeout); // Cleanup the timeout on state change
  }, [searchText]);

  // Filter modules based on debounced input
  useEffect(() => {
    if (debouncedText.trim() === '') {
      setModules([]); // Reset if search is empty
    } else {
      const filtered = locations.filter((mod) =>
        mod.name.toLowerCase().includes(debouncedText.toLowerCase())
      );
      setModules(filtered);
    }
  }, [debouncedText]);

  // Clear search input and results
  const clearSearch = () => {
    setSearchText('');
    setModules([]);
  };

  const handleLocationPress = (location) => {
    // setSearchText(location.name);
    // setModules([]);

    const script = `
    highlightLocation(${location.lat}, ${location.long}, ${JSON.stringify(location.name)}, ${JSON.stringify(location.fjr)}, ${JSON.stringify(location.zuhr)}, ${JSON.stringify(location.asr)}, ${JSON.stringify(location.maghrib)}, ${JSON.stringify(location.isha)}, ${JSON.stringify(location.jumma)}, ${JSON.stringify(location.have_washroom)}, ${JSON.stringify(location.have_wuzu_area)}, ${JSON.stringify(location.capacity)});
      true;
    `;

    webViewRef?.current?.injectJavaScript(script);
  };


  const sendMasajidToWebView = () => {
    if (webViewRef.current) {
      const message = JSON.stringify(locations);
      webViewRef.current.postMessage(message);
      console.log({locations});
      
    }
  };

  // Fetch masajid using useQuery at the top level
  const { data: masjids, isSuccess } = useQuery({
    queryKey: ['fetchMasjid'],
    queryFn: async () => {
      const res = await fetch(`${URL_STRING}/fetch-all-test-masajid`);
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

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      {/* Top Section: Search Input */}
      {/* <View style={tw`p-4`}>
        <TextInput
          style={tw`bg-white p-3 rounded-md border border-gray-300 text-base`}
          placeholder="Search here"
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={tw`mt-2 self-end`}>
            <Text style={tw`text-red-500 font-bold`}>Clear</Text>
          </TouchableOpacity>
        )}
      </View> */}

      {/* Search Feedback */}
      {debouncedText.length > 0 && (
        <Text style={tw`px-4 text-base text-gray-700`}>
          You searched: <Text style={tw`font-semibold`}>{debouncedText}</Text>
        </Text>
      )}

      {/* Search Results */}
      {debouncedText.length > 0 && (
        <ScrollView style={tw`px-4 mt-2`} keyboardShouldPersistTaps="handled">
          {/* {modules.map((item, index) => (
          ))}
             <Text key={index} style={tw`text-base py-1 text-gray-800`}>
               • {item}
             </Text> */}
            <FlatList
            data={modules}
            keyExtractor={(item, index) => index.toString()}
            style={tw`max-h-40 bg-gray-100 mx-2 rounded`}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleLocationPress(item)}>
                <Text style={tw`p-3 border-b border-gray-300`}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      )}

      {/* Bottom Section: OpenStreetMap */}
      <View style={tw`h-2.5/4`}>
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
        <Text style={tw`sticky text-center font-bold text-md`}>Masajids Near you:</Text>
        <FlashList
      data={locations}
      renderItem={({ item }) => <ButtonTile handleOnPress={() => handleLocationPress(item)} navigateTo='' btnTxt={item.name}/>}
      estimatedItemSize={200}
    />

    </SafeAreaView>
  );
};

export default MapScreen;
