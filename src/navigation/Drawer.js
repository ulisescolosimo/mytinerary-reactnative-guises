import React from 'react'
import HomeScreen from '../../Screens/HomeScreen'
import Cities from '../../Screens/Cities'
import SignUp from '../../Screens/SignUp'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Detail from '../../Screens/Detail';
import Activities from '../../Screens/Activities';
import SignIn from '../../Screens/SignIn';
import { useSelector, useDispatch } from 'react-redux';
import { loggedTrue } from '../features/loggedSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignOut from '../../Screens/SignOut';

const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {

  const logged = useSelector((state) => state.logged.loggedState)
  const dispatch = useDispatch()

  const user = AsyncStorage.getItem('user')

  if (user.length > 0) {
    dispatch(loggedTrue())
  }

return (
  <DrawerNavigation.Navigator
  screenOptions={{
    drawerStyle: {
      backgroundColor: 'white',
      width: 250,},}}>
      <DrawerNavigation.Screen name="Home" component={HomeScreen} />
      <DrawerNavigation.Screen name="Cities" component={Cities} />
      { logged ? <DrawerNavigation.Screen name="Sign Out" component={SignOut} /> : <DrawerNavigation.Screen name="Sign In" component={SignIn} />}
      { logged ? null : <DrawerNavigation.Screen name="Sign Up" component={SignUp} />}
      <DrawerNavigation.Screen options={{
                  drawerItemStyle: { display: 'none' }
        }} name="Details" component={Detail} />
      <DrawerNavigation.Screen options={{
                  drawerItemStyle: { display: 'none' }
        }} name="Activities" component={Activities} />

    </DrawerNavigation.Navigator>
)
}