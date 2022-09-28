import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList, TextInput} from 'react-native';
import React, { useState } from 'react'
import { useGetCityIdQuery } from '../src/features/citiesApi' 

export default function Detail({route}) {

    const {data: cities} = useGetCityIdQuery(route.params)
    const citiesResponse = cities?.response
    console.log(citiesResponse);

  return (
    <ScrollView>
    <View style={styles.cardContent}>
        <View style={styles.card}>
            <Text style={styles.text}>{citiesResponse.city}</Text>
            <Image 
                source={{uri:citiesResponse?.photo}}
                style={styles.image}
            />
        </View>
        <View style={styles.cardText}>
            <Text style={styles.text}>{ citiesResponse?.description }</Text>
            <Text style={styles.text}>Population:{ citiesResponse?.population }</Text>
        </View>
        <View style={styles.cardText}>
            <Text style={styles.text}>Foundation year:{(citiesResponse?.foundation).slice(0,4)}</Text>
        </View>
    </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20
      },
      cardText: {
        borderRadius: 6,
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20
      },
      image: {
        width: 300,
        height: 220,
        resizeMode: 'contain',
        borderRadius: 6
      },
      cardContent: {
        marginVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 20
      }
})