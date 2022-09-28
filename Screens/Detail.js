import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList, Button} from 'react-native';
import React, { useState } from 'react'
import { useGetCityIdQuery } from '../src/features/citiesApi' 
import { useNavigation } from '@react-navigation/native';
import Itineraries from '../src/components/Itineraries';

export default function Detail({route}) {

    const {data: cities} = useGetCityIdQuery(route.params)
    const citiesResponse = cities?.response
    const navigation = useNavigation(); 

  return (
    <ScrollView>
        <View style={styles.card}>
            <Text style={styles.text}>{citiesResponse?.city}</Text>
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
            <Text style={styles.text}>Foundation year:{citiesResponse?.foundation}</Text>
        </View>
        <Button onPress={() => navigation.navigate('Cities')} title={'Go back to cities'} />
    <Itineraries id={route.params} />
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