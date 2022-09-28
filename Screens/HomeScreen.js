import React from 'react'
import {useRef} from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, useWindowDimensions} from 'react-native';
import Welcome from '../src/components/Welcome';
import Carousel from '../src/components/Carousel';
import { useGetAllCitiesQuery } from '../src/features/citiesApi'
import {Dimensions} from 'react-native';

export default function HomeScreen() {

  const {width: screenWidth, height: screenHeigth} = Dimensions.get('window');

  const title = 'No matter where in the world you want to go, we can help get you there.'

  const {data: cities} = useGetAllCitiesQuery()
  const citiesResponse = cities?.response

  return (
    <View style={{
      width: screenWidth,
      height: screenHeigth,
    }}>
      <Welcome title={title} />        
      <Carousel cities={citiesResponse} />
    </View>
  );
}