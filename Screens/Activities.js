import { View, Text, StyleSheet, FlatList, Image, Button, CommonActions } from 'react-native'
import React, { useEffect } from 'react'
import { useGetActivitiesQuery } from '../src/features/activitiesAPI'
import logo from '../assets/logo-header.jpg';
import { useNavigation } from '@react-navigation/native';

export default function Activities({route}) {

    const {data: acts, refetch} = useGetActivitiesQuery(route.params)

    const activities = acts?.response

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View>
            {activities?.length > 0 ? <Image source={logo} resizeMode={'cover'} style={styles.logo} /> : <Text style={{fontSize: 30}}>No activities found</Text>}
        </View>
    <FlatList data={activities} renderItem={({ item }) => (
        <View style={styles.card}>
        <View style={styles.cardContent}>
            <Image 
                source={{uri:item?.photo}}
                style={styles.image}
            />
            <Text style={styles.text}>{item?.user?.name}</Text>
            <View style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.text}>{item?.name}</Text>
                <Text style={styles.text}>Duration: {item?.itinerary?.duration} minutes</Text>
                <Button title={'Like'} color={"black"} onPress={() => {
                        alert('Activity liked!');
                }}/>
            </View>
        </View>
        </View>
    )} />
    </View>
)
}

const styles = StyleSheet.create({
    container: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center',
    },
    logo : {
        marginTop: 10
    },
    image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    },
    text: {
    fontSize: 18,
    marginBottom:10
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300
      }
})