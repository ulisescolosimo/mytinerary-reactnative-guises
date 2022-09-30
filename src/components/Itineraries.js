import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetItisMutation } from '../features/itineraryAPI' 
import { useNavigation } from '@react-navigation/native';

export default function Itineraries({id}) {

    const navigation = useNavigation();

    const [getCity] = useGetItisMutation();
    const [itineraries, setItineraries] = useState()

    async function getEvent() {
        await getCity(id)
        .then((res)=>{
            if (res.data?.success) {
                setItineraries(res.data.response)
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
            {itineraries?.length > 0 ? <Text style={styles.titleIti}>Itineraries</Text> : <Text style={{fontSize:30}}>No itineraries found</Text>}
        </View>
    {itineraries?.map((item) => (
        <TouchableOpacity keyExtractor={itineraries => itineraries?._id} key={item?._id} onPress={() => navigation.navigate('Activities', item?._id)}>
        
        <View style={styles.card} key={item?._id}>
        <View style={styles.cardContent}>
        <View style={styles.containerUser}>
            <Image 
                source={{uri:item?.user?.photo}}
                style={styles.image}
            />
            <Text style={styles.textUser}>{item?.user?.name}</Text>
            </View> 
                <Text style={{ fontSize:23, borderBottomColor:"black", borderBottomWidth:2}}>{item?.name}</Text>
                
                <Text style={styles.textBody}>Duration: {item?.duration} minutes</Text>
                <Text style={styles.textBody}>Price: ${item?.price}</Text>
                <View>
                    <Text key={item?._id} style={styles.text}>{item?.tags?.map((item) => <Text key={item?._id}>{item} </Text>)}</Text>
                </View>
                <Text style={styles.textBody}>Likes: {item?.likes?.length}</Text>
            </View>
        </View>
        
        </TouchableOpacity>
    ))}
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
    borderRadius: 30,
    marginTop: 15
    },

    containerUser: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        color:"white",
        backgroundColor: "black",
        width:"100%",
    },

    textUser:{
        color:"white",
        fontSize:17,
        margin:10
    },

    text: {
    fontSize: 18,
    textAlign:"center"
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
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
      },

      cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        
      },

      textBody: {
        fontSize:18,
        margin:2,
        textAlign: "left"
      },

      titleIti: {
        fontSize:30,
        width:250,
        textAlign:"center",
        borderBottomColor:"black",
        borderBottomWidth:3,
        marginBottom:10
      }
})