import { StyleSheet, Text, TouchableOpacity, View,TextInput,Image } from 'react-native'
import React from 'react'
// import { TextInput } from 'react-native-gesture-handler'

const VerifyCode = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={{height:20}}>varification</Text> */}
      <View style={styles.form}>
        <View style={{flex:1,flexDirection:"column"}}>
      
            <Text style={styles.label}>Enter verification code we've send on given number.</Text> 
         <TextInput style={styles.registerInputs} placeholder='857498'></TextInput>
        </View>

      </View>
      <View style={{flex:0.2,flexDirection:"row",justifyContent:"space-between",padding:10}}>
        <Text style={{height:24,marginTop:160,fontSize:20,color:"black"}}>0:20 min</Text>
        
        <TouchableOpacity>
          <Text style={{color:"#ffccaa",height:24,marginTop:160,fontSize:20}}>Resend</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => { navigation.navigate('Appointments'); }}>
          <Text style={styles.textbttom}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VerifyCode

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
   
  },
  form:{
    flex:0.6,
    flexDirection:"column",
    marginTop:100
  },
  label:{
    height:44,
    width:"90%",
    color:"black",
    marginLeft:"10%",
    marginRight:"10%",
    fontSize:18,
   
  },
  registerInputs:{
    width:"80%",
    height:44,
    fontSize:16,
    borderBottomWidth:1,
    marginLeft:"10%",
    marginTop:50,
    borderBottomColor:"#acada6",
    marginTop:1
  },
  footer:{
    flex:0.2,
  },
  textbttom:{
    height:60,
    width:"100%",
    color:"black",
    backgroundColor:"#fca",
    fontSize:18,
    justifyContent:"center",
    textAlign:"center" ,
    marginTop:"20%",
    padding:15,
    color:"white" 
  }

})
