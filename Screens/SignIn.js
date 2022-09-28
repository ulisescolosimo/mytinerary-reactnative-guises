import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Image, TextInput, Dimensions} from 'react-native';
import { loggedTrue } from '../src/features/loggedSlice'
import travelers from '../assets/travelers.png'
import { useGetLoginMutation } from '../src/features/usersAPI'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {

    const {width: screenWidth, height: screenHeigth} = Dimensions.get('window');

    const navigation = useNavigation(); 

    const [emailRef, setEmail] = useState()
    const [passwordRef, setPassword] = useState()

    const dispatch = useDispatch()

    const [newLogin] = useGetLoginMutation()

    const signIn = async(data) => {
        try{
            await newLogin(data)
                .then((success) => {
                    let user = success?.data?.response?.user
                    AsyncStorage.setItem('user', JSON.stringify(user))
                    setEmail('')
                    setPassword('')
                })
                dispatch(loggedTrue())
                navigation.navigate('Cities')
        }catch(error){
            console.log(error);
        }
    }

    const handleForm = async(e) => {

        e.preventDefault();

        let data = {
        email: emailRef,
        pass: passwordRef,
        from: 'form'
        }

        signIn(data)
    }
    

return (
    <View style={{
    width: screenWidth,
    height: screenHeigth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    }}>
            <View style={SignInstyles.containerIntro}>

                <Text style={SignInstyles.titleIntro}>Do you Belong ?
                </Text>

                <Text style={SignInstyles.titleInfo}>If you don't have an account, sign up here!
                </Text>

                  <TouchableOpacity //onPress={() => navigation.navigate('SingIn')}
                        style={SignInstyles.button}>
                        <Text style={{ fontSize: 17, color: 'white', textAlign:'center' }}>Sign Up</Text>
                </TouchableOpacity>

                <Image
                        source={travelers}
                        style={SignInstyles.image}
                />               

            </View>
            
            <View style={SignInstyles.containerForm}>
                <Text style={SignInstyles.h1}>
                        Sign In
                </Text>
                <View style={SignInstyles.inputContainer}>
                <TextInput placeholder={' Email'} style={SignInstyles.input} onChangeText={(value)=> setEmail(value)}  /> 
                </View>
                <View style={SignInstyles.inputContainer}>
                <TextInput secureTextEntry={true} placeholder={' Password'} style={SignInstyles.input} onChangeText={(value)=> setPassword(value)} /> 
                </View>
                <View style={{marginVertical: 20}}>
                <TouchableOpacity onPress={handleForm}
                        style={SignInstyles.buttonLogin}>
                        <Text style={{ fontSize: 15, color: 'white', textAlign:'center', padding:5 }}>Sign In</Text>
                </TouchableOpacity>
                </View>
            </View>
    </View>
)
}

const SignInstyles = StyleSheet.create({
    
    containerIntro: {
            width:"90%",
            height:"38%",
            backgroundColor: "black",
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            display: 'flex',
            alignItems: 'center',
    } ,

    containerForm : {
            width:"90%",
            height:"40%",
            backgroundColor: '#3f0303',
            marginBottom: 85,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            display: 'flex',
            alignItems: "center"
    
    },

    titleIntro: {
    color: 'white',
    fontSize: 25,
    marginTop: 10
    
    },

    titleInfo: {
            textAlign:'center',
            color: 'white',
            fontSize: 18,
            margin: 20
    },
    buttonLogin: {
        backgroundColor: '#3f0303',
        color:"white",
        marginHorizontal: 30,
        borderRadius:20,
        borderColor:"white",
        borderWidth:2,
        padding:3,
        width: "30%",
    },

    image: {
        width: "100%",
        height: "45%",
        resizeMode:'contain'
    },

    button: {
            backgroundColor: '#3f0303',
            color:"white",
            marginBottom:20,
            borderRadius:20,
            borderColor:"white",
            borderWidth:2,
            padding:3,
            width: "30%",
    },

    h1: {
            color: "white",
            fontSize: 30,
            textAlign: "center",
            fontWeight:'bold',
            letterSpacing: 2,
            marginTop: 10

    },
    
    input: {
            backgroundColor: "white",
            width: "100%",
            borderRadius: 40,
            padding: 10
    },

    inputContainer: {
            backgroundColor: "white",
            width: '80%', 
            margin:8,
            display:'flex',
            flexWrap:'wrap',
            borderRadius: 30,
    },

    icon: {
            background: "red",
            width: "10%",
            
    }

})