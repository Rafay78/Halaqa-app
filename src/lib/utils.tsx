import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let azanSound = null;



export const URL_STRING = "https://9cb1-111-88-12-110.ngrok-free.app"

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
  





export const rukus =  [
  {
  arabic:`بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِیْمِ
اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِیْنَ(1) الرَّحْمٰنِ الرَّحِیْمِ(2) مٰلِكِ یَوْمِ الدِّیْنِﭤ(3) اِیَّاكَ نَعْبُدُ وَ اِیَّاكَ نَسْتَعِیْنُﭤ(4) اِهْدِنَا الصِّرَاطَ الْمُسْتَقِیْمَ(5) صِرَاطَ الَّذِیْنَ اَنْعَمْتَ عَلَیْهِمْ ﴰ غَیْرِ الْمَغْضُوْبِ عَلَیْهِمْ وَ لَا الضَّآلِّیْنَ(7)`,
translation: `1. In the Name of Allah, the Most Beneficent, the Most Merciful.  

2. All the praises and thanks be to Allah, the Lord of the 'Alamin (mankind, jinns and all that exists).  

3. The Most Beneficent, the Most Merciful.  

4. The Only Owner (and the Only Ruling Judge) of the Day of Recompense (i.e. the Day of Resurrection)  

5. You (Alone) we worship, and You (Alone) we ask for help (for each and everything).  

6. Guide us to the Straight Way 

7. The Way of those on whom You have bestowed Your Grace, not (the way) of those who earned Your Anger (such as the Jews), nor of those who went astray (such as the Christians). `,
surahName: "AL - Fatiha"
},

{ arabic:`الٓمّٓ(1)  ذٰلِكَ الْكِتٰبُ لَا رَیْبَ ﶈ فِیْهِ ۚۛ-هُدًى لِّلْمُتَّقِیْنَ(2)  الَّذِیْنَ یُؤْمِنُوْنَ بِالْغَیْبِ وَ یُقِیْمُوْنَ الصَّلٰوةَ وَ مِمَّا رَزَقْنٰهُمْ یُنْفِقُوْنَ(3)  وَ الَّذِیْنَ یُؤْمِنُوْنَ بِمَاۤ اُنْزِلَ اِلَیْكَ وَ مَاۤ اُنْزِلَ مِنْ قَبْلِكَۚ-وَ بِالْاٰخِرَةِ هُمْ یُوْقِنُوْنَﭤ(4)  اُولٰٓىٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْۗ-وَ اُولٰٓىٕكَ هُمُ الْمُفْلِحُوْنَ(5)  اِنَّ الَّذِیْنَ كَفَرُوْا سَوَآءٌ عَلَیْهِمْ ءَاَنْذَرْتَهُمْ اَمْ لَمْ تُنْذِرْهُمْ لَا یُؤْمِنُوْنَ(6)  خَتَمَ اللّٰهُ عَلٰى قُلُوْبِهِمْ وَ عَلٰى سَمْعِهِمْؕ-وَ عَلٰۤى اَبْصَارِهِمْ غِشَاوَةٌ٘-وَّ لَهُمْ عَذَابٌ عَظِیْمٌ(7)`,
translation: `1. Alif-Lam-Mim. [These letters are one of the miracles of the Qur'an and none but Allah (Alone) knows their meanings].

2. This is the Book (the Qur'an), whereof there is no doubt, a guidance to those who are Al-Muttaqun [the pious and righteous persons who fear Allah much (abstain from all kinds of sins and evil deeds which He has forbidden) and love Allah much (perform all kinds of good deeds which He has ordained)].

3. Who believe in the Ghaib and perform As-Salat (Iqamat-as-Salat), and spend out of what we have provided for them [i.e. give Zakat , spend on themselves, their parents, their children, their wives, etc., and also give charity to the poor and also in Allah's Cause - Jihad, etc.].

4. And who believe in (the Qur'an and the Sunnah) which has been sent down (revealed) to you (Muhammad Peace be upon him ) and in [the Taurat (Torah) and the Injeel (Gospel), etc.] which were sent down before you and they believe with certainty in the Hereafter. (Resurrection, recompense of their good and bad deeds, Paradise and Hell, etc.).

5. They are on (true) guidance from their Lord, and they are the successful.

6. Verily, those who disbelieve, it is the same to them whether you (O Muhammad Peace be upon him ) warn them or do not warn them, they will not believe.

7. Allah has set a seal on their hearts and on their hearings, (i.e. they are closed from accepting Allah's Guidance), and on their eyes there is a covering. Theirs will be a great torment.`,
surahName: "AL - Baqarah"}, {}
]

import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const loadAzanSound = () => {
  azanSound = new Sound('alfatiha.mp3', Sound.MAIN_BUNDLE, (error) => {
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
