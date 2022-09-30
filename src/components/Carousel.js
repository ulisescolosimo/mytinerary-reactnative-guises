import React, { useRef } from 'react'
import { View, Text, StyleSheet, FlatList, Image, Dimensions, SafeAreaView, Animated, ScrollView } from 'react-native'

const width = Dimensions.get("window").width

export default function Carousel({cities}) {

  const scrollX = useRef(new Animated.Value(0)).current; 

  return (
    <Animated.FlatList
    onScroll={Animated.event(
      [{nativeEvent: { contentOffset: { x: scrollX}
      }}], { useNativeDriver: true })}
    
        data={cities}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval = {200}
        pagingEnabled={true}
        scrollEnabled={true}
        scrollEventThrottle={16}
        keyExtractor={(city) => city._id} 
        renderItem={({ item }) => {
          return (
          <Animated.View style={{
            marginTop:30,
            width:400,
            height: 250,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'   
            }}>
            <Image 
                source={{uri:item.photo}}
                style={styles.image}
            />
            <Text style={styles.text}>{item.city}</Text>
          </Animated.View>)  
            
        }}
    />
)    
}

const styles = StyleSheet.create({

  carousel : {
    minheight: '100%',
    color: 'white'
  },
  image: {
    height: 220,
    width: 350,
    resizeMode: 'cover',
    position: 'absolute',
    borderColor:"red",
    borderRadius:10
  },
  
  text: {
    textAlign:'center',
    fontSize: 30, 
    color: 'white', 
    top:70,
    width:350,
    backgroundColor:"rgba(0, 0, 0, 0.711)"
  },
})