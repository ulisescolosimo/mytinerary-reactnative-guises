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
          uri: 'https://player.vimeo.com/external/570600111.sd.mp4?s=de62b35ce18bcef2c41d5a1cab4f84125a6d79b7&profile_id=165&oauth2_token_id=57447761',
        }}
        rate={.7}
        shouldPlay={true}
        isLooping={true}
        isMuted={true}
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
    opacity: 1,
  },
  title: {
    color:"red"
  }
})