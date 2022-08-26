import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../owenercomponent/signup/Login';
import Register from '../owenercomponent/signup/Register';
import VerifyCode from '../owenercomponent/signup/VerifyCode';
import Home from '../owenercomponent/Home';

const Stack = createNativeStackNavigator();
const LoginScreen = () => {
  return (
    <NavigationContainer>
      {/* //<Login /> */}
       <Stack.Navigator>
       <Stack.Screen name="login" component={Login}  screenOptions={{ headerShown: false }} /> 
       <Stack.Screen name="register" component={Register} />
       <Stack.Screen name="varifycode" component={VerifyCode} />
       <Stack.Screen name="Home" component={Home} />
   
  </Stack.Navigator>
    </NavigationContainer>
   
    // <View>
    //   <Text>App</Text>
    //   <Login />
    // </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})