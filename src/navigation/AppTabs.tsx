import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import HalaqaMapScreen from '../screens/HalaqaMapScreen';
import { Image, Text, View } from 'react-native';
import tw from '../lib/tailwind';
import QuranScreen from '../screens/QuranScreen';
import TabBarButton from '../components/buttons/TabBarButton';
const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    // <NavigationContainer></NavigationContainer>
        <Tab.Navigator  initialRouteName='masjidMapTab' screenOptions={{animation:'shift', headerShown:false, tabBarShowLabel:false, tabBarLabelPosition:"below-icon" ,tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },tabBarStyle:{
            padding:0,
            marginRight:20,
            marginLeft:20,
            position:'absolute',
            bottom:10,
            elevation:10,
            borderRadius: 10,
            // borderColor: "#000",
            height: 75,
            display:'flex',
            flexDirection: 'row',
            justifyContent:'center',
            paddingLeft:25
            // alignItems:'center'
            // height:
            // backgroundColor: "#aef"
        }}}>
          <Tab.Screen options={{
            tabBarIcon: ({focused}) => (              
            <TabBarButton focused={focused} imageURI={require('../assets/images/mosque.png')} label='Masajids'/>
          )
          }} name="masjidMapTab" component={MapScreen} />

          <Tab.Screen options={{
            
            tabBarIcon: ({focused}) => (
              <TabBarButton focused={focused} imageURI={require('../assets/images/mosque.png')} label='Halaqahs'/>

          )
          }} name="halaqaMapTab" component={HalaqaMapScreen} />

        <Tab.Screen options={{
            
            tabBarIcon: ({focused}) => (
              <TabBarButton focused={focused} imageURI={require('../assets/images/book.png')} label='Quran'/>
          )
          }} name="quranScreen" component={QuranScreen} />

        </Tab.Navigator> 
     )
}

export default AppTabs