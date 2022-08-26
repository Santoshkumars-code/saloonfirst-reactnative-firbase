import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Myprofile from './Myprofile';
import Myservices from './Myservices';
import Myreview from './Myreview';
import Term from './Term';
import Contact from './Contact';
import Chnglanguage from './Chnglanguage';
import Logout from './Logout';
import React from 'react'

const Stack = createNativeStackNavigator();

const Nav = ({navigation}) => {
  return (
   <NavigationContainer independent={true}>
      <Stack.Navigator>
         <Stack.Screen name="MyProfile" component={Myprofile} />
         <Stack.Screen name="Myservices" component={Myservices} />
         <Stack.Screen name="Myreview" component={Myreview} />
         <Stack.Screen name="Term" component={Term} />
         <Stack.Screen name="Contact" component={Contact} />
         <Stack.Screen name="Chnglanguage" component={Chnglanguage} />
         <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Nav

const styles = StyleSheet.create({})