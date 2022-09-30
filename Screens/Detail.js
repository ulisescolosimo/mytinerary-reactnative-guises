import { StyleSheet, Text, View, BackHandler, Image, ScrollView, Button, Alert} from 'react-native';
import React from 'react'
import { useGetCityIdQuery } from '../src/features/citiesApi' 
import { useNavigation } from '@react-navigation/native';
import Itineraries from '../src/components/Itineraries';

export default function Detail({route}) {

    const navigation = useNavigation(); 
    
    const {data: cities} = useGetCityIdQuery(route.params)
    const citiesResponse = cities?.response
    
    if(!citiesResponse?.foundation) return null

  return (
    <ScrollView>
      <View style={styles.containerGeneral}>
        <View style={styles.cardDetail}>
          <View style={styles.card}>
              <Image 
                  source={{uri:citiesResponse?.photo}}
                  style={styles.image}
              />
          </View>
          <View style={styles.cardText}>
              <Text style={styles.textTitle}>{citiesResponse?.city}</Text>              
              <Text style={styles.text}>{ citiesResponse?.description }</Text>
          </View>
          <View style={styles.cardText}>
              <Text style={styles.text}>Population: { citiesResponse?.population }</Text>
              <Text style={styles.text}>Foundation year: {(citiesResponse?.foundation).slice(0,4)}</Text>
          </View>
          <Button onPress={() => navigation.navigate('Cities')}  color={"black"} title={'Go back to cities'} />
        </View>
      </View>
      <Itineraries id={route.params} keyExtractor={item => item?._id} />  
    </ScrollView>

  )
}

const styles = StyleSheet.create({
    
  containerGeneral: {
    display: 'flex',
    alignItems:"center",
    marginTop:30,
  },
  
  card: {
        borderRadius: 6,
        borderColor: 'red',      
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        textAlign: 'left',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 17,
      },

      cardDetail: {
        backgroundColor:"#ddddd9",
        width: "90%"
      
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
        bottom:15,
        
      },
      cardContent: {
        marginVertical: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 20,
           
      },
      textTitle: {
        fontSize: 35,
        fontWeight:"bolder",
        letterSpacing:6
      }
})