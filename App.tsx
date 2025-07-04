import NavigationStack from "./src/navigation/NavigationStack";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { AuthProvider } from './src/contexts/AuthContext';

const queryClient = new QueryClient({});
// import TrackPlayer from 'react-native-track-player';
import { useEffect, useState } from "react";
// import { setupPlayer, addTrack } from "./service";
import { SafeAreaView, ActivityIndicator } from "react-native";
import { loadAzanSound } from "./src/lib/utils";
// import Sound from "react-native-sound";
// import { loadAzanSound } from "./src/lib/utils";


export default function App() {


  // const [isPlayerReady, setIsPaylerReady] = useState(false)

  // async function setup(){
  //   let isSetup = await setupPlayer()

  //   if (isSetup) {
  //     await addTrack()
  //   }

  //   setIsPaylerReady(isSetup)
  // }

  // useEffect(() => {
  //   setup()
  // }, [])


  useEffect(()=>{


    loadAzanSound('alfatiha'); 
    
    // const handleSetupPlayer = async () => {
    //   await TrackPlayer.setupPlayer()
    // }
    // handleSetupPlayer()
  },[])

  // if (!isPlayerReady) {
  //   return (
  //     <SafeAreaView>
  //       <ActivityIndicator />
  //     </SafeAreaView>
  //   )
  // }

  return (
<>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationStack />
          <Toast />
        </QueryClientProvider>
      </AuthProvider>

    </>
)
}
