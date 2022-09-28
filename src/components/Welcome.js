import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import logo from '../../assets/logo-header.jpg';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Welcome({title}) {

  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
        <View style={{width: '100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <Image source={logo} resizeMode={'contain'} style={{width: '100%'}} />
        </View>
        <Text style={{ display: 'flex', margin: 30, backgroundColor: 'white', color:'black', padding: 20 }}>
          {title}
        </Text>
        <View style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Cities')}
          style={styles.button}>
          <Text style={{ fontSize: 20, color: 'black' }}>Start trip!</Text>
        </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
)
}

const styles = StyleSheet.create({
    container: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      display: 'flex',
    },
    text: {
      textAlign: 'center',
      color: 'black',
      fontSize: 30
    },
    button: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      borderWidth: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    list: {
    }
})