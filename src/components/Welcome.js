import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Welcome({title}) {

  const navigation = useNavigation(); 
    
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
          <Text style={{ fontSize: 20, color: 'white' }}>Start trip!</Text>
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
      backgroundColor: "rgba(0,0,0,0)"
      
    },
    text: {
      textAlign: 'center',
      color: 'black',
      fontSize: 30,
      zIndex:1, 
      
    },
    button: {
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 600,
      backgroundColor:"rgba(0, 0, 0, 0.711)"
    },
    myTiText: {
      fontSize: 50,
      color:'white',
      letterSpacing: 6,
      fontStyle: 'italic',
      marginTop:50,
      
    },

    title: {
      color: "white",
      textAlign: 'center',
      fontSize: 20,
      margin: 30,
      paddingBottom:15,
                                                    
                                                      
    }
})