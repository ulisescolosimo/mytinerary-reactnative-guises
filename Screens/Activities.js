import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { useGetActivitiesQuery } from '../src/features/activitiesAPI'

export default function Activities({route}) {

    console.log(route.params);

    const {data: acts} = useGetActivitiesQuery(route.params)

    const activities = acts?.response

    console.log(activities);

  return (
    <View style={styles.container}>
        <View>
            {activities?.length > 0 ? <Text style={{fontSize: 30}}>Activities</Text> : <Text style={{fontSize: 30}}>No activities found</Text>}
        </View>
    <FlatList data={activities} renderItem={({ item }) => (
        <View style={styles.card} key={item?._id}>
        <View style={styles.cardContent}>
            <Image 
                source={{uri:item?.photo}}
                style={styles.image}
            />
            <Text style={styles.text}>{item?.user?.name}</Text>
            <View style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.text}>{item?.name}</Text>
                <Text style={styles.text}>Duration: {item?.itinerary?.duration} minutes</Text>
                <Button title={'Like'} />
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 45,
    marginTop: 20
    },
    image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    },
    text: {
    fontSize: 18
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