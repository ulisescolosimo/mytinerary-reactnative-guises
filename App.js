import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './src/navigation/Drawer' 
import {Provider} from 'react-redux'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
    </Provider>
  )
}