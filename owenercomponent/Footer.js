import { StyleSheet, Text, View ,TouchableOpacity,Image,} from 'react-native'
import React from 'react'

const Footer = ({navigation}) => {
  return (
    <View>
     
         <View style={{flex:1,flexDirection:'row',justifyContent:"space-around",marginTop:20}}>
           <TouchableOpacity onPress={() => { navigation.navigate('')}}>           
             <Image 
             source={{uri:"https://img.icons8.com/ios/50/000000/calendar--v1.png"}} 
             style={{height:30,width:30}}
             />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => {navigation.navigate("Graph")}}>           
             <Image 
             source={{uri:"https://img.icons8.com/wired/64/000000/graph.png"}} 
             style={{height:30,width:30}}
             />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => { navigation.navigate('Wallet'); }}>            
             <Image 
             source={{uri:"https://img.icons8.com/material-outlined/24/000000/wallet.png"}} 
             style={{height:30,width:30}}
             />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => { navigation.navigate('Profile'); }}>           
             <Image 
             source={{uri:"https://img.icons8.com/ios-glyphs/30/000000/person-male.png"}} 
             style={{height:30,width:30}}
             />
           </TouchableOpacity>
         </View>
      </View>
    
  )
}

export default Footer

// const styles = StyleSheet.create({
//     cardfooter:{
//         height:80,
//         backgroundColor:"#fff",
//         borderTopWidth:1,
//         borderTopColor:"#aaa"
         
//       }
// })