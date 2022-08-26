import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Appointment = ({navigation}) => {
  return (
    <ScrollView  horizontal={true}>
        <View style={{flex:1,flexDirection:"row"}}>
        <TouchableOpacity style={styles.date}>
             <Text style={{fontSize:14,textAlign:"center",color:"white"}}>July</Text>
            <Text style={{fontSize:22, color:"black",fontWeight:"800",textAlign:"center",color:"white"}}>10</Text>
            <Text style={{fontSize:14,textAlign:"center",color:"white"}}>sun</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.date}>
             <Text style={{fontSize:14,textAlign:"center"}}>July</Text>
            <Text style={{fontSize:22, color:"black",fontWeight:"800",textAlign:"center"}}>11</Text>
            <Text style={{fontSize:14,textAlign:"center"}}>mon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.date}>
             <Text style={{fontSize:14,textAlign:"center"}}>July</Text>
            <Text style={{fontSize:22, color:"black",fontWeight:"800",textAlign:"center"}}>10</Text>
            <Text style={{fontSize:14,textAlign:"center"}}>tue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.date}>
             <Text style={{fontSize:14,textAlign:"center",}}>July</Text>
            <Text style={{fontSize:22, color:"black",fontWeight:"800",textAlign:"center"}}>12</Text>
            <Text style={{fontSize:14,textAlign:"center"}}>wed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.date}>
             <Text style={{fontSize:14,textAlign:"center"}}>July</Text>
            <Text style={{fontSize:22, color:"black",fontWeight:"800",textAlign:"center"}}>13</Text>
            <Text style={{fontSize:14,textAlign:"center"}}>thu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.date}>
             <Text style={{fontSize:14,textAlign:"center"}}>July</Text>
            <Text style={{fontSize:22, color:"black",fontWeight:"800",textAlign:"center"}}>14</Text>
            <Text style={{fontSize:14,textAlign:"center"}}>fri</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.date}>
             <Text style={{fontSize:14,textAlign:"center"}}>July</Text>
            <Text style={{fontSize:22, color:"black",fontWeight:"800",textAlign:"center"}}>15</Text>
            <Text style={{fontSize:14,textAlign:"center"}}>sat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.date}>
             <Text style={{fontSize:14,textAlign:"center"}}>July</Text>
            <Text style={{fontSize:22, color:"black",fontWeight:"800",textAlign:"center"}}>16</Text>
            <Text style={{fontSize:14,textAlign:"center",}}>sun</Text>
        </TouchableOpacity>
     
    </View>
    </ScrollView>
   
  )
}

export default Appointment

const styles = StyleSheet.create({
    date:{
        height:80,
        width:80,
        backgroundColor:"#fca",
        borderRadius:10,
        padding:5,
        margin:10,
        
    }
})