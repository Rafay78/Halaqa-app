import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import tw from '../lib/tailwind';
import AyahCard from './cards/AyahCard';


const { width: screenWidth } = Dimensions.get('window');
const { height } = Dimensions.get('window');


const QuranCarousel = () => {
  const carouselRef = useRef(null); 
  const [cardIndex, setCardIndex] = useState(0); 
  
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.ayah}>{item}</Text>
    </View>
  );

  const cardContents = [{
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
}
  ]
  const lastCardIndex = cardContents.length - 1;

  return (
<View style={{ }}>
      <View style={{ height: height * .65 }}>
        <Swiper
          ref={carouselRef}
          cards={cardContents}
          renderCard={(card) => <AyahCard item={card} />}
          onSwiped={(index) => {
            setCardIndex(index + 1);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          backgroundColor="transparent"
          stackSize={3}
          goBackToPreviousCardOnSwipeLeft
          swipeBackCard
          disableRightSwipe={cardIndex === lastCardIndex}
          disableTopSwipe={cardIndex === lastCardIndex}
          disableBottomSwipe={cardIndex === lastCardIndex}
          containerStyle={{}}
          cardStyle={{}}
          // useViewOverflow
        />
      </View>

      <View style={{ padding: 10, backgroundColor: '#ed3'}}>
        {/* Quran FM ss */}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#f0fdf4',
    borderRadius: 10,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  ayah: {
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 40,
    fontFamily: 'serif', // Use Arabic font if available
  },
});

export default QuranCarousel;
