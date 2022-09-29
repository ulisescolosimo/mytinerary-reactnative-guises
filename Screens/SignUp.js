import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet, TouchableOpacity, Image, TextInput, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import travelers from '../assets/travelers.png'

export default function SignUp() {

const {width: screenWidth, height: screenHeigth} = Dimensions.get('window');
const navigation = useNavigation(); 
      
  return (
    <View style={{
      width: screenWidth,
      height: screenHeigth,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      }}>
            <View style={SignUpstyles.containerIntro}>

                  <Text style={SignUpstyles.titleIntro}>Do you Belong ?
                  </Text>

                  <Text style={SignUpstyles.titleInfo}>If you already have an account sign in here!
                  </Text>

                  <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
                        style={SignUpstyles.button}>
                        <Text style={{ fontSize: 17, color: 'white', textAlign:'center' }}>Sign In</Text>
                  </TouchableOpacity>

                  <Image
                        source={travelers}
                        style={SignUpstyles.image}
                  />               

            </View>
            
            <View style={SignUpstyles.containerForm}>
                  <Text style={SignUpstyles.h1}>
                        Sign Up
                  </Text>
                  <View style={SignUpstyles.inputContainer}>
                  
                  
                  <TextInput placeholder={' Full name'} style={SignUpstyles.input} onChangeText={(value)=> setInput(value)}/>  
                  </View>
                  <View style={SignUpstyles.inputContainer}>
                  <TextInput placeholder={' Email'} style={SignUpstyles.input} onChangeText={(value)=> setInput(value)}  /> 
                  </View>
                  <View style={SignUpstyles.inputContainer}>
                  <TextInput placeholder={' Password'} style={SignUpstyles.input} onChangeText={(value)=> setInput(value)} /> 
                  </View>
                  <View style={SignUpstyles.inputContainer}>
                  <TextInput placeholder={' Image'} style={SignUpstyles.input} onChangeText={(value)=> setInput(value)} /> 
                  </View>
                  <View style={SignUpstyles.inputContainer}>
                  <TextInput placeholder={' Country'} style={SignUpstyles.input} onChangeText={(value)=> setInput(value)} /> 
                  </View>
                  
                  <TouchableOpacity onPress={() => navigation.navigate('SingIn')}
                        style={SignUpstyles.button}>
                        <Text style={{ fontSize: 17, color: 'white', textAlign:'center' }}>Sign Up</Text>
                  </TouchableOpacity>
                  <Text style={{color:"white"}}>Or</Text>
            </View>
       
    </View>
  )
}

const SignUpstyles = StyleSheet.create({
      
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

      image: {
           width: "100%",
           height: "45%",
           resizeMode:'contain'
      },

      button: {
            backgroundColor: '#3f0303',
            color:"white",
            marginBottom:25,
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
            width: "50%",
            

      },

      inputContainer: {
            backgroundColor: "white",
            width: '80%', 
            margin:8,
            display:'flex',
            flexWrap:'wrap'            
                     
            
      },

      icon: {
            background: "red",
            width: "10%",
            
      }

})