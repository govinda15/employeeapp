import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import {Title, Card, Button} from 'react-native-paper'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

const Profile = ()=>{
    return(
        
        <View style={styles.root}>
            <LinearGradient
             colors={["#0033ff","#6bc1ff"]}
             style={{height:"20%"}} />
             <View style={{alignItems:"center",margin:15}}>
             <Image
             style={{width:180,height:160,borderRadius:140/2,marginTop:-50}}
             source={{uri:"https://images.unsplash.com/photo-1578909196400-59f8f8156a05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"}} />
             
             </View>
             <View style={{alignItems:"center"}}>
            <Title> Try again</Title>
            <Text style={{fontSize:18}}>U will get a chance</Text>
             </View>
             <Card style={styles.mycard}>
                 <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="red" />
                    <Text style={styles.mytext}>abc@123.com</Text>
                 </View>

             </Card>

             <Card style={styles.mycard}>
                 <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="red" />
                    <Text style={styles.mytext}>1234567</Text>
                 </View>

             </Card>

             <Card style={styles.mycard}>
                 <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="red" />
                    <Text style={styles.mytext}>10 LPA</Text>
                 </View>

             </Card>

             <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
                 <Button icon="account-edit" mode="contained" theme={theme} onPress={() => console.log("Pressed")}>Edit</Button>
                 <Button icon="delete" mode="contained" theme={theme} onPress={() => console.log("Pressed")}>Fire employee</Button>
             </View>
        </View>
    )
}

const theme={
    colors:{
        primary:"blue"
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:3
    }
})
export default Profile;