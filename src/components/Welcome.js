import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";


export default function Welcome({title}) {

  const navigation = useNavigation(); 

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    
  return (
    <View style={styles.container}>
        <View style={{backgroundColor: 'rgba(0,0,0,0)', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <Text style={styles.myTiText} >
          My Tinerary
        </Text>
        </View>
        <Text style={styles.title}>
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
}}

const styles = StyleSheet.create({
    container: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      display: 'flex',
      backgroundColor: "rgba(0,0,0,0)"
    },
    text: {
      textAlign: 'center',
      color: 'black',
      fontSize: 30
    },
    button: {
      backgroundColor: 'white',
      padding: 20,
      marginTop: 20,
      borderRadius: 10,
      borderWidth: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    myTiText: {
      fontSize: 50,
      color:'white',
      letterSpacing: 6,
      fontStyle: 'italic',
      marginTop:50
 
    },

    title: {
      color: "white",
      textAlign: 'center',
      fontSize: 20,
      margin: 30,
      paddingBottom:30,
      
  
    }
})