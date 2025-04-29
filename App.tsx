import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import tw from 'twrnc';  // Tailwind CSS library

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

const App = () => {
  // State variables
  const [searchText, setSearchText] = useState('');
  const [debouncedText, setDebouncedText] = useState('');
  const [modules, setModules] = useState<string[]>([]);

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
      const filtered = dummyModules.filter((mod) =>
        mod.toLowerCase().includes(debouncedText.toLowerCase())
      );
      setModules(filtered);
    }
  }, [debouncedText]);

  // Clear search input and results
  const clearSearch = () => {
    setSearchText('');
    setModules([]);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      {/* Top Section: Search Input */}
      <View style={tw`p-4`}>
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
      </View>

      {/* Search Feedback */}
      {debouncedText.length > 0 && (
        <Text style={tw`px-4 text-base text-gray-700`}>
          You searched: <Text style={tw`font-semibold`}>{debouncedText}</Text>
        </Text>
      )}

      {/* Search Results */}
      {debouncedText.length > 0 && (
        <ScrollView style={tw`px-4 mt-2`} keyboardShouldPersistTaps="handled">
          {modules.map((item, index) => (
            <Text key={index} style={tw`text-base py-1 text-gray-800`}>
              • {item}
            </Text>
          ))}
        </ScrollView>
      )}

      {/* Bottom Section: OpenStreetMap */}
      <View style={tw`flex-1`}>
        <WebView
          source={{ uri: 'https://www.openstreetmap.org' }}
          style={tw`flex-1`}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
