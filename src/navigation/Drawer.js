import React from 'react'
import HomeScreen from '../../Screens/HomeScreen'
import Cities from '../../Screens/Cities'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Detail from '../../Screens/Detail';
import Activities from '../../Screens/Activities';

const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {

return (
  <DrawerNavigation.Navigator
  screenOptions={{
    drawerStyle: {
      backgroundColor: 'white',
      width: 250,},}}>
      <DrawerNavigation.Screen name="Home" component={HomeScreen} />
      <DrawerNavigation.Screen name="Cities" component={Cities} />
      <DrawerNavigation.Screen options={{
                  drawerItemStyle: { display: 'none' }
        }} name="Details" component={Detail} />
      <DrawerNavigation.Screen options={{
                  drawerItemStyle: { display: 'none' }
        }} name="Activities" component={Activities} />
    </DrawerNavigation.Navigator>
)
}