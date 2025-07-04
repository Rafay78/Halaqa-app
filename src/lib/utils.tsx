import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let azanSound = null;

export type rukuTypes = {
  "ruku": number,
  "arabic": string,
  "translation": string,
  "arabic_recitation": string,
  "tafseer_audio": string,
  "tafseer_video": string
  }

  export const rukuDefault = {
    "ruku": 0,
    "arabic": "",
    "translation": "",
    "arabic_recitation": "",
    "tafseer_audio": "",
    "tafseer_video": ""
    }


import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}


export const URL_STRING = "https://730c-111-88-12-110.ngrok-free.app"

// import { Track } from "react-native-track-player";

// export const playListData: Track[] = [
//     {
//       id: 1,
//       title: 'Maan Meri Jaan',
//       artist: 'King',
//       album: 'Champagne Talk',
//       artwork:
//         'https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg',
//       url: require('../assets/audio/AlFatiha.mp3'),
//     },
    // {
    //   id: 2,
    //   title: 'Raataan Lambiyan',
    //   artist: 'Tanishk Bagchi, Asees Kaur',
    //   album: 'Shershaah',
    //   artwork:
    //     'https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg',
    //   url: require('./assets/audio/two.mp3'),
    // },
    // {
    //   id: 3,
    //   title: 'Kesariya',
    //   artist: 'Arijit Singh, Amitabh Bhattacharya',
    //   album: 'Brahmastra',
    //   artwork:
    //     'https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg',
    //   url: require('./assets/audio/three.mp3'),
    // },
    // {
    //   id: 4,
    //   title: 'Title Track',
    //   artist: 'Arijit Singh, Parampara Tandon',
    //   album: 'Pal Pal Dil Ke Paas',
    //   artwork:
    //     'https://c.saavncdn.com/328/Pal-Pal-Dil-Ke-Paas-Hindi-2019-20200420150444-500x500.jpg',
    //   url: require('./assets/audio/four.mp3'),
    // },
    // {
    //   id: 5,
    //   title: 'Besharam Rang',
    //   artist: 'Vishal & Shekhar, Shilpa Rao',
    //   album: 'Pathaan',
    //   artwork:
    //     'https://c.saavncdn.com/807/Pathaan-Hindi-2022-20221222104158-500x500.jpg',
    //   url: require('./assets/audio/five.mp3'),
    // },
  // ];
  






export function isValidEmail(email: string) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    if (token !== null) {
      console.log('Token retrieved:', token);
      return token;
    } else {
      console.log('No token found');
    }
  } catch (error) {
    console.log('Error retrieving token:', error);
  }
};

export const handleSetToken = async (response: any) => {
  try {
    // Assuming 'response' contains the access token
    const {access_token} = response;

    // Store the token in AsyncStorage
    await AsyncStorage.setItem('access_token', access_token);
    console.log('Token stored successfully');
  } catch (error) {
    console.log('Error storing the token:', error);
  }
};

// react-native-sound config

export const loadAzanSound = (surah?:string) => {
  azanSound = new Sound(surah, null, (error) => {
    // azanSound = new Sound(`${surah}.mp3`, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('❌ Failed to load sound', error);
    } else {
      console.log('✅ Sound loaded successfully');
    }
  });

  azanSound.pause()
};

export const pauseAzanSound = () => {
  if (azanSound) {
    azanSound.pause((success) => {
      if (!success) {
        console.log('❌ Playback failed due to audio decoding errors');
      }
    });
  } else {
    console.log('⚠️ Sound not loaded yet');
  }
};

export const playAzanSound = () => {
  if (azanSound) {
    azanSound.play((success) => {
      if (!success) {
        console.log('❌ Playback failed due to audio decoding errors');
      }
    });
  } else {
    console.log('⚠️ Sound not loaded yet');
  }
};

export const handleReleaseSound = () => {
  if (azanSound) {
    azanSound.release()
  }else{
    console.log("Release Failed ❌");
    
  }
}
