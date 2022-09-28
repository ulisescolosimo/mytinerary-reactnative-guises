import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetItisMutation } from '../features/itineraryAPI' 
import { useNavigation } from '@react-navigation/native';

export default function Itineraries({id}) {

    const navigation = useNavigation();

    const [getCity] = useGetItisMutation();
    const [itineraries, setItineraries] = useState()
    console.log(itineraries);

    async function getEvent() {
        await getCity(id)
        .then((res)=>{
            if (res.data?.success) {
                setItineraries(res.data.response)
                console.log(itineraries);
            } else {
                console.log(res.error)
            }
        })
    }

    useEffect(()=>{
        getEvent()
    },[id])

return (
    <View style={styles.container}>
        <View>
            {itineraries?.length > 0 ? <Text style={{fontSize: 30}}>Itineraries</Text> : <Text style={{fontSize: 30}}>No itineraries found</Text>}
        </View>
    <FlatList data={itineraries} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Activities', item?._id)}>
        <View style={styles.card} key={item?._id}>
        <View style={styles.cardContent}>
            <Image 
                source={{uri:item?.user?.photo}}
                style={styles.image}
            />
            <Text style={styles.text}>{item?.user?.name}</Text>
            <View>
                <Text style={styles.text}>{item?.name}</Text>
                <Text style={styles.text}>Likes:{item?.likes?.length}</Text>
                <Text style={styles.text}>Duration: {item?.duration} minutes</Text>
                <Text style={styles.text}>Price: ${item?.price}</Text>
                <View>
                    <Text style={styles.text}>Tags: {item?.tags?.map((item) => <Text>{item} </Text>)}</Text>
                </View>
            </View>
        </View>
        </View>
        </TouchableOpacity>
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
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 30
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