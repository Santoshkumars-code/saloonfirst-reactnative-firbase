import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#282828'}}>
      <View style={{backgroundColor:"red"}}>
        <Image
         source={{uri:"https://i.pinimg.com/736x/f9/bd/2e/f9bd2e43ef91360986deb94aa60b3644.jpg"}} 
         style={{height:250,width:"100%"}}
        />   
      </View>

      <View>
        <Text style={{fontSize:24,fontWeight:"700",color:"#eee",marginLeft:15}}>Swap Salons</Text>
      </View>

        <View >
            <TouchableOpacity style={styles.card}
             onPress={() => navigation.push('Myprofile')}>
           
              <Image
              source={{uri:"https://img.icons8.com/ios-glyphs/30/ff0000/person-male.png"}} 
              style={{height:20,width:20}}
              />
              <Text style={styles.text}>My Profile</Text>
              </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity style={styles.card}
             onPress={() => {
              navigation.navigate('Myservices');
            }}>
              <Image
              source={{uri:"https://img.icons8.com/ios-glyphs/30/ff0000/person-male.png"}} 
              style={{height:20,width:20}}
              />
              <Text style={styles.text}>My Services</Text>
              </TouchableOpacity>
          </View>

          <View >
              <TouchableOpacity style={styles.card}
                   onPress={() => {
                   navigation.navigate('Myreview');
                   }}>
                <Image
                source={{uri:"https://img.icons8.com/ios-glyphs/30/ff0000/person-male.png"}} 
                style={{height:20,width:20}}
                />
                <Text style={styles.text}>My Review</Text>
                </TouchableOpacity>
          </View>

          <View >
              <TouchableOpacity style={styles.card}
              onPress={() => {
                navigation.navigate('Term');
                }}>
                <Image
                source={{uri:"https://img.icons8.com/ios-glyphs/30/ff0000/person-male.png"}} 
                style={{height:20,width:20}}
                />
                <Text style={styles.text}>Term & Condition</Text>
                </TouchableOpacity>
          </View>

          <View >
              <TouchableOpacity style={styles.card}
              onPress={() => {
                navigation.navigate('Contact');
                }}>
                  <Image
                  source={{uri:"https://img.icons8.com/ios-glyphs/30/0ff000/person-male.png"}} 
                  style={{height:20,width:20}}
                  />
                <Text style={styles.text}>Contact Us</Text>
                </TouchableOpacity>
          </View>

          <View >
              <TouchableOpacity style={styles.card}
              onPress={() => {
                navigation.navigate('Chnglanguage');
                }}>
                <Image
                source={{uri:"https://img.icons8.com/ios-glyphs/30/ff0000/person-male.png"}} 
                style={{height:20,width:20}}
                />
                <Text style={styles.text}>Change Language</Text>
                </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity style={styles.card}
            onPress={() => {
              navigation.navigate('Logout');
              }}>
              <Image
              source={{uri:"https://img.icons8.com/ios-glyphs/30/ff0000/person-male.png"}} 
              style={{height:20,width:20}}
              />
              <Text style={styles.text}>Logout</Text>
              </TouchableOpacity>
          </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  card:{  
    flexDirection:'row',
    justifyContent:"flex-start",
    marginTop:18,
    marginLeft:15,
  },
  text:{
    fontSize:18,
    fontWeight:'600', 
    color:"white",
    marginLeft:10,
   
  }
})