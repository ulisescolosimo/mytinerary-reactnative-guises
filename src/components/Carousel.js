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
        keyExtractor={(city) => city.photo} 
        renderItem={({ item }) => {
          return (
          <Animated.View style={{
            marginTop:20,
            borderRadius:100,
            width:400          
            }}>
            <Image 
                source={{uri:item.photo}}
                style={styles.image}
            />
            <Text style={{textAlign:'center', fontSize: 22}}>{item.city}</Text>
          </Animated.View>)  
            
        }}
    />
)    
}

const styles = StyleSheet.create({

  carousel : {
    minheight: '100%',
    color: 'black'
  },
  image: {
    height: 220,
    resizeMode: 'contain',
  }
}) //