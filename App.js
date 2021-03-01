import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import contants from 'expo-constants'
import {Home} from './screens/Home';
import CreateEmployee from './screens/CreateEmployee'
export default function App() {
  return (
    <View style={styles.container}>
     {/* <Home /> */}
      <CreateEmployee/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    marginTop:contants.statusBarHeight,
    //alignItems: 'center',
   //flexDirection:"row",
    //justifyContent: 'center',
  
  },
});
