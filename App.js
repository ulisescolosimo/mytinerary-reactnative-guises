import React, { useCallback } from 'react'
import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './src/navigation/Drawer' 
import {Provider} from 'react-redux'
import store from './store'
import {useFonts} from 'expo-font'
import { RobotoSlab_400Regular } from '@expo-google-fonts/dev'
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
  
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    Roboto: require('./assets/fonts/RobotoMono-Regular.ttf')
  });


  useEffect(() => {
    async function prepare () {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])

  const onLayout = useCallback(async () =>{
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded) return null;

  return (
    <Provider store={store} onLayout={onLayout}>
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
    </Provider>
  )
}