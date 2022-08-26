import * as React from 'react';
import { Text, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../owenercomponent/Home';
import Graph from '../owenercomponent/Footersection/Graph';
import Wallet from '../owenercomponent/Footersection/Wallet';
import Profile from '../owenercomponent/Footersection/Profile';


const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="My Appointments" component={Home} 
            options={{
              tabBarShowLabel:false,
              // headerShown: false,
              tabBarIcon: ({ color }) => (
                  <Image 
                    source={{uri:"https://img.icons8.com/ios/50/ffccaa/calendar--v1.png"}}
                    style={{height:30,width:30,marginTop:-10}}
                   />
              ),}}/>

        <Tab.Screen name="Insight" component={Graph} 
         options={{
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) => (
              <Image 
                source={{uri:"https://img.icons8.com/wired/64/ffccaa/graph.png"}}
                style={{height:30,width:30,marginTop:-10}}
               />
          ),}}/>
        <Tab.Screen name="Wallet" component={Wallet} 
         options={{
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) => (
              <Image 
                source={{uri:"https://img.icons8.com/ios/24/ffccaa/wallet--v1.png"}}
                style={{height:30,width:30,marginTop:-10}}
               />
          ),}}/>
        <Tab.Screen name="." component={Profile} 
         options={{
          tabBarShowLabel:false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
              <Image 
                source={{uri:"https://img.icons8.com/ios-glyphs/30/ffccaa/person-male.png"}}
                style={{height:30,width:30,marginTop:-10}}
               />
          ),}}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}