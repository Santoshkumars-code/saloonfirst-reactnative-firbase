import { StyleSheet, Text, TouchableOpacity, View,TextInput,Image } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

// import { TextInput } from 'react-native-gesture-handler'

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={{height:20}}>Register</Text> */}
      <View style={styles.form}>
        <View style={{flex:1,flexDirection:"row"}}>
        <Image 
         source={{uri:"https://img.icons8.com/pastel-glyph/64/ffccaa/person-male--v3.png"}} 
         style={{height:40,width:40 , marginTop:20}}/>
            {/* <Text style={styles.label}>Full Name</Text> */}
         <TextInput style={styles.registerInputs} placeholder='Full Name'></TextInput>
        </View>

        <View style={{flex:.5,flexDirection:"row", marginTop:60}}>
        <Image 
         source={{uri:"https://img.icons8.com/fluency-systems-filled/48/ffccaa/new-post.png"}} 
         style={{height:40,width:40, marginTop:20}}/>
            {/* <Text style={styles.label}>Full Name</Text> */}
         <TextInput style={styles.registerInputs} placeholder='Email'></TextInput>
        </View>

        <View style={{flex:0.5,flexDirection:"row", marginTop:60}}>
        <Image 
         source={{uri:"https://img.icons8.com/ios-glyphs/30/ffccaa/phone--v1.png"}} 
         style={{height:40,width:40, marginTop:20}}/>
            {/* <Text style={styles.label}>Full Name</Text> */}
         <TextInput style={styles.registerInputs} placeholder='Phone Number'></TextInput>
        </View>

      </View>
      <View  style={{flex:0.625,}} >
      <Lottie
       
       style={{height:"100%",width:'100%'}}
       source={require('../../assets/registration.json')}
       autoPlay 
     />
        {/* <Image
        source={{uri:"https://png.pngtree.com/png-clipart/20191120/original/pngtree-gradient-fingerprint-unlock-login-computer-png-image_5044947.jpg"}}
          style={{height:"100%",width:"100%"}}
         />        */}
      </View> 

      <View style={{flex:0.075}}>
        <Text style={{height:20,textAlign:"center",marginTop:10}}>We'll send verification code on above given number</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => { navigation.navigate('varifycode'); }}>
          <Text style={styles.textbttom}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    backgroundColor:"white"
   
  },
  form:{
    flex:0.2,
    flexDirection:"column",
    // marginTop:10,
    // backgroundColor:"black"
  },
  label:{
    height:40,
    width:"100%",
    color:"black",
    marginLeft:3,
    fontSize:18,
    justifyContent:"flex-start"
  },
  registerInputs:{
    width:"80%",
    height:44,
    fontSize:16,
    borderBottomWidth:1,
    marginLeft:"2%",
    borderBottomColor:"#acada6",
    marginTop:20
  },
  footer:{
    flex:0.1,
  },
  textbttom:{
    height:60,
    width:"100%",
    color:"black",
    backgroundColor:"#fca",
    fontSize:18,
    justifyContent:"center",
    textAlign:"center" ,
    marginTop:"3%",
    padding:15,
    color:"white" 
  }

})