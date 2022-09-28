import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, TextInput} from 'react-native';
import React, { useState } from 'react'
import { useGetAllCitiesQuery, useGetCityNameQuery } from '../src/features/citiesApi' 
import Card from '../src/components/Card.js'
import { useNavigation } from '@react-navigation/native';

export default function Cities() {

  const navigation = useNavigation(); 

  const {data: cities} = useGetAllCitiesQuery()
  const citiesResponse = cities?.response

  const [input, setInput] = useState()

  function upperCaseOne(value){
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  const filteredData = citiesResponse?.filter(item => item?.city?.includes(input))

  return (
    <View style={styles.container}>
      <TextInput placeholder={'Enter city...'} style={styles.input} onChangeText={(value)=> setInput(upperCaseOne(value))} />
      <FlatList data={filteredData?.length > 0 ? filteredData : citiesResponse} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', item?._id)}>
          <Card key={item?._id}>
            <Text style={styles.text}>{ item?.city }</Text>
            <Image 
                source={{uri:item?.photo}}
                style={styles.image}
            />
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
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
    height: 220,
    resizeMode: 'cover',
    borderRadius: 6
  },
  text: {
    fontSize: 25
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8,
    margin: 10,
    width: 200
  }
})