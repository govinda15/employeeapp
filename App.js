import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import contants from 'expo-constants'
import {Home} from './screens/Home';
export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#515955",
    marginTop:contants.statusBarHeight,
    //alignItems: 'center',
   //flexDirection:"row",
    //justifyContent: 'center',
  
  },
});
