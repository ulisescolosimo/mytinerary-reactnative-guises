import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Image, TextInput, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGetNewUserMutation } from '../src/features/usersAPI'

export default function SignUp() {

      const {width: screenWidth, height: screenHeigth} = Dimensions.get('window');
      const navigation = useNavigation(); 

      const [newUser] = useGetNewUserMutation()

      const [nameRef, setName] = useState()
      const [emailRef, setEmail] = useState()
      const [passwordRef, setPassword] = useState()
      const [imageRef, setImage] = useState()
      const [countryRef, setCountry] = useState()

    const signUp = async(data) => {
        await newUser(data)
        .then((succes) => {
            if(succes?.error){
                alert('Error trying register')
            } else {
                alert("Sign up successfully. Please check your email to verify account")
                navigation.navigate('Sign In')
            }
        }) 
        .catch(error => alert(error))
    }
    
    const handleForm = async(e) => {
    
            e.preventDefault();
    
            let data = {
            country: countryRef,
            photo: imageRef,
            name: nameRef,
            pass: passwordRef,
            email: emailRef,
            from: 'form',
            role: 'user',
            }
    
            if(emailRef == "" || passwordRef == "" || nameRef == "" || countryRef == "" || imageRef == ""){
                alert('Please fill all credentials')
            } else {
                signUp(data)
            }
    }
    
return (
    <View style={{
    width: screenWidth,
    height: screenHeigth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    }}>
            
            <View style={SignUpstyles.containerForm}>
                <Text style={SignUpstyles.h1}>
                        Sign Up
                </Text>
                <View style={SignUpstyles.inputContainer}>
                
                
                <TextInput placeholder={' Full name'} style={SignUpstyles.input} onChangeText={(value)=> setName(value)}/>  
                </View>
                <View style={SignUpstyles.inputContainer}>
                <TextInput placeholder={' Email'} style={SignUpstyles.input} onChangeText={(value)=> setEmail(value)}  /> 
                </View>
                <View style={SignUpstyles.inputContainer}>
                <TextInput secureTextEntry={true} placeholder={' Password (min 8 caracters)'} style={SignUpstyles.input} onChangeText={(value)=> setPassword(value)} /> 
                </View>
                <View style={SignUpstyles.inputContainer}>
                <TextInput placeholder={' Image'} style={SignUpstyles.input} onChangeText={(value)=> setImage(value)} /> 
                </View>
                <View style={SignUpstyles.inputContainer}>
                <TextInput placeholder={' Country'} style={SignUpstyles.input} onChangeText={(value)=> setCountry(value)} /> 
                </View>
                
                <TouchableOpacity onPress={handleForm}
                        style={SignUpstyles.button}>
                        <Text style={{ fontSize: 17, color: 'white', textAlign:'center' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View style={SignUpstyles.containerIntro}>

                <Text style={SignUpstyles.titleIntro}>Do you Belong ?
                </Text>

                <Text style={SignUpstyles.titleInfo}>If you already have an account sign in here!
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Sign In')}
                        style={SignUpstyles.button}>
                        <Text style={{ fontSize: 17, color: 'white', textAlign:'center' }}>Sign In</Text>
                </TouchableOpacity>            

            </View>
    
    </View>
)
}

const SignUpstyles = StyleSheet.create({
    
    containerIntro: {
        width:"90%",
        height:"30%",
        backgroundColor: "black",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        display: 'flex',
        alignItems: 'center',
        marginBottom: 60
    } ,

    containerForm : {
        width:"90%",
        height:"53%",
        backgroundColor: '#3f0303',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        display: 'flex',
        alignItems: "center",
        marginTop: 10
    },

    titleIntro: {
    color: 'white',
    fontSize: 24,
    marginTop: 10
    },

    titleInfo: {
        textAlign:'center',
        color: 'white',
        fontSize: 15,
        margin: 10,
        marginHorizontal: 15,
        marginBottom: 25
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
        height: "35%",
        resizeMode:'contain'
    },

    button: {
        backgroundColor: '#3f0303',
        color:"white",
        borderRadius:20,
        borderColor:"white",
        borderWidth:2,
        padding:3,
        width: "30%",
        marginBottom: 20,
        marginTop: 10
    },

    h1: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontWeight:'bold',
        letterSpacing: 2,
        marginTop: 10

    },
    
    input: {
        backgroundColor: "white",
        width: "100%",
        borderRadius: 40,
        padding: 5
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