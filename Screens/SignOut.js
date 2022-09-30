import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { loggedReverse } from '../src/features/loggedSlice'
import { useNavigation } from '@react-navigation/native';

export default function SignOut() {

    const logged = useSelector((state) => state.logged.loggedState)
    const dispatch = useDispatch()
    const navigation = useNavigation(); 
    
    const getData = async () => {
        try {
        if(logged) {
            await AsyncStorage.removeItem('user')
                .then((success) => {
                    dispatch(loggedReverse())
                    navigation.navigate('Home')
                    alert('Signed out!')
                })
        }
        } catch(e) {
        console.log(e);
        }
    }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Button title={'Sign Out'} onPress={getData} />
    </View>
  )
}