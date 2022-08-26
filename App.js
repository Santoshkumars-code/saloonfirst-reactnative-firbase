import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './owenercomponent/signup/Login'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './owenercomponent/signup/Register';
import VerifyCode from './owenercomponent/signup/VerifyCode';
import { NavigationContainer } from '@react-navigation/native';
import Home from './owenercomponent/Home';
import LoginScreen from './Screen/LoginScreen';
import Graph from './owenercomponent/Footersection/Graph';
import Wallet from './owenercomponent/Footersection/Wallet';
import Profile from './owenercomponent/Footersection/Profile';
import Footer from './owenercomponent/Footer';
import TabScreen from './Screen/TabScreen';
// import Nav from './owenercomponent/Profile/Nav';
// import Myprofile from './Myprofile';
import Myservices from './owenercomponent/Profile//Myservices';
import Myreview from './owenercomponent/Profile//Myreview';
import Term from './owenercomponent/Profile//Term';
import Contact from './owenercomponent/Profile//Contact';
import Chnglanguage from './owenercomponent/Profile//Chnglanguage';
import Logout from './owenercomponent/Profile/Logout';
import Myprofile from './owenercomponent/Profile/Myprofile';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer independent={true}>
       <Stack.Navigator >
            <Stack.Screen name="login" component={Login}   options={{ headerShown: false }} /> 
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="varifycode" component={VerifyCode} />
            <Stack.Screen name="Appointments" component={TabScreen} options={{ headerShown: false }}/> 
            <Stack.Screen name="Home" component={Home} />        
            <Stack.Screen name="Graph" component={Graph} />        
            <Stack.Screen name="Wallet" component={Wallet} />        
            <Stack.Screen name="Profile" component={Profile} />   
            {/* <Stack.Screen name="Nav" component={Nav}  options={{ headerShown: false }}/>    */}
            <Stack.Screen name="Myprofile" component={Myprofile} />
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

export default App

const styles = StyleSheet.create({})