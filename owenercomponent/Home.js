import { StyleSheet, Text, View ,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Appointment from './Appointment'
import Customer from './Customer'
import Footer from './Footer'
import TabScreen from '../Screen/TabScreen'

const Home = ({navigation}) => {
  return (
    <>
     <View style={styles.container}>
      {/* <View style={styles.header}>
      <Text style={{ height:80, width:"70%", fontSize:24,color:"black",fontWeight:'700'}}>Appointments </Text>
      <Text style={{ height:80, width:"50%", fontSize:22,color:"black",fontWeight:'700'}}>July 2022 </Text>
      </View> */}

      <View style={styles.card}>
    <Appointment />
      </View>

      <View style={styles.cardbody}>
       <ScrollView > 
              <Text style={{fontSize:20, fontWeight:"700", marginLeft:20,color:"#f0f"}}>10 Appointments</Text>
              <Customer />
              <Customer/>
              <Customer/>
              <Customer/>
              <Customer/>
              <Customer/>
              <Customer/>
              <Customer/>
              <Customer/>
         
       </ScrollView> 
       </View>
     
       <View style={styles.cardfooter}>
        
       </View>
    </View>
    </>
   
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  card:{
    height:100,
    width:"100%",
    backgroundColor:"#fff",
  },
  header:{
    flex:.3,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10
  },
  cardbody:{
    height:550,
    width:"100%",
    backgroundColor:"#fff",
  },
  cardfooter:{
    height:80,
    backgroundColor:"#fff",
    borderTopWidth:1,
    borderTopColor:"#aaa"
     
  }

})