import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import React from 'react'


const Customer = ({navigation}) => {
  return (
    // <ScrollView horizontal={false}>
    <View>
  <View style={{flex:0.2,flexDirection:"row",marginTop:5}}>
       <View>
       <Image 
             source={{uri:"https://picsum.photos/300"}} 
             style={{height:100,width:100}}
             />
       </View>
       <View style={styles.time}>
         <Text style={{fontSize:20,fontWeight:"700",color:"white"}}>12:00 pm</Text>
       </View>
      <View style={{marginLeft:20}}>
         <View style={{flex:0.05,flexDirection:"row",justifyContent:"space-around"}}>
                <Text style={{fontSize:18,color:"black",fontWeight:"500"}}>service </Text>
                <Text style={{fontSize:18,color:"black"}}>4587rupees</Text>
         </View>
         <View >
               <Text style={{fontSize:22,color:"black",fontWeight:"700"}}>Santosh Kumar</Text>
         </View>

         <View style={{flex:0.05,flexDirection:"row",justifyContent:"space-around",}}>
            <Text style={{fontSize:18,color:"black",fontWeight:"500"}}>7788</Text>
            <Text style={{fontSize:18,color:"#fca",fontWeight:"500"}}>call now</Text>
         </View>

      </View>
    </View>
    </View>
   
    // </ScrollView>
    
  )
}

export default Customer

const styles = StyleSheet.create({
    time:{
        height:60,
        width:70,
        color:"white",
        backgroundColor:"#ffccaa",
        alignItems:"center",
        borderRadius:10,
        marginTop:20,
        marginLeft:-25,
    }

})