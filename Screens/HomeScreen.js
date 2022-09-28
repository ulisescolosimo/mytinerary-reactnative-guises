import React from 'react'
import {useRef} from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, useWindowDimensions} from 'react-native';
import Welcome from '../src/components/Welcome';
import Carousel from '../src/components/Carousel';
import { useGetAllCitiesQuery } from '../src/features/citiesApi'
import {Dimensions} from 'react-native';
import { Video } from 'expo-av';

export default function HomeScreen() {

  const {width: screenWidth, height: screenHeigth} = Dimensions.get('window');

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const title = 'No matter where in the world you want to go, we can help get you there.'

  const {data: cities} = useGetAllCitiesQuery()
  const citiesResponse = cities?.response

  return (
    <View style={{
      width: screenWidth,
      height: screenHeigth,
      opacity:1
    }}>
      <Video
        ref={video}
        style={HomeStyles.video}
        source={{
          uri: 'https://joy.videvo.net/videvo_files/video/free/2015-08/small_watermarked/SunsetWavesMedium_preview.webm?v=1541089',
        }}
        rate={.7}
        shouldPlay={true}
        isLooping={true}
        muted={true}
        resizeMode="cover"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      /> 
      <Welcome title={title} style={HomeStyles.title}/>        
      <Carousel cities={citiesResponse} />
    </View>
  );
}

const HomeStyles = StyleSheet.create({
  video: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 1
  },
  title: {
    color:"red"
  }
})