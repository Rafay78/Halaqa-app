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
import { SearchByoptions, URL_STRING, hadeeth_book_data } from '../lib/utils';
import DropDown from '../components/DropDown';
import { Plus, Search } from '../assets/images/svgs';
import OptionButtonSmall from '../components/buttons/OptionButtonSmall';

// Dummy modules list for search
const dummyModules = [
  'React',
  'React Native',
  'Redux',
  'Axios',
  'Node.js',
  'Express',
  'MongoDB',
];


const HadeethScreen = () => {
  // State variables
  const [hadeesBook, setHadeesBook] = useState('sahih-bukhari');
  const [searchByoption, setSearchByOption] = useState<SearchByoptions>(SearchByoptions.hadees_no)
  
  
  
  const [locations, setLocations] = useState([
      { name: 'Masjid Al Haram', lat: 21.4225, long: 39.8262 },
      { name: 'Masjid An Nabawi', lat: 24.4672, long: 39.6111 },
      { name: 'Masjid Quba', lat: 24.4442, long: 39.6165 },
    ]);
    
    const [searchText, setSearchText] = useState('');
    const [debouncedText, setDebouncedText] = useState('');
    const [modules, setModules] = useState<{name:'',lat:0, long:0}[]>([{name:'',lat:0, long:0}]);
    
    const handleSearch = () => {

        console.log({searchByoption, hadeesBook, searchText});
    }


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

  const handleSelectOption = (option:SearchByoptions) => {
    setSearchByOption(option)
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100 px-2` }>
        <Text style={tw`self-center text-black`}>Ahadeeth</Text>
      {/* Top Section: Search Input */}
      <View style={tw`p-2`}>
        <TextInput
          style={tw`bg-white p-3 rounded-md border border-gray-300 text-base`}
          placeholder={searchByoption == SearchByoptions.hadees_no ? 'Enter Hadees #' : 'Search Here...'}
          value={searchText}
          onChangeText={setSearchText}
          keyboardType={searchByoption == SearchByoptions.hadees_no ? 'number-pad' : 'default'}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={tw`mt-2 self-end`}>
            <Text style={tw`text-red-500 font-bold`}>Clear</Text>
          </TouchableOpacity>
        )}
      </View> 

        {/* Search filters */}
        <View style={tw`mt-5`}>
            <View style={tw`border p-4 flex-row items-center justify-around`}>
                <Text style={tw`pl-3 pb-1 text-black font-bold`}>Select Book</Text>
                <DropDown value={hadeesBook} setValue={(data:any) => setHadeesBook(data.value)} data={hadeeth_book_data}/>
            </View>
        </View>

        <View style={tw`mt-5`}>

            <Text>Search By:</Text>
            <View style={tw`mx-4 flex-row justify-between`}>
                <OptionButtonSmall state={searchByoption == SearchByoptions.arabic} btnTxt='Arabic' handlePress={() => handleSelectOption(SearchByoptions.arabic)}/>
                <OptionButtonSmall state={searchByoption == SearchByoptions.urdu} btnTxt='Urdu' handlePress={ () => handleSelectOption(SearchByoptions.urdu)}/>
                <OptionButtonSmall state={searchByoption == SearchByoptions.english} btnTxt='English' handlePress={() => handleSelectOption(SearchByoptions.english)}/>
                <OptionButtonSmall state={searchByoption == SearchByoptions.hadees_no} btnTxt='Hadees #' handlePress={() => handleSelectOption(SearchByoptions.hadees_no)}/>
            </View>

        </View>

      {/* Search Feedback */}
      {/* {debouncedText.length > 0 && (
        <Text style={tw`px-4 text-base text-gray-700`}>
          You searched: <Text style={tw`font-semibold`}>{debouncedText}</Text>
        </Text>
      )} */}

      {/* Search Results */}
      {/* {debouncedText.length > 0 && (
        <ScrollView style={tw`px-4 mt-2`} keyboardShouldPersistTaps="handled">
            <FlatList
            data={modules}
            keyExtractor={(item, index) => index.toString()}
            style={tw`max-h-40 bg-gray-100 mx-2 rounded`}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() =>{}}>
                <Text style={tw`p-3 border-b border-gray-300`}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      )} */}

      <View style={tw`justify-center items-center mt-5`}>

            <TouchableOpacity style={tw``} onPress={() => handleSearch()}>

                <Search height={50} width={50}/>

            </TouchableOpacity>

      </View>
      


    </SafeAreaView>
  );
};

export default HadeethScreen;
