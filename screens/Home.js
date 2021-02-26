import React from 'react';
import { StyleSheet, Text, View,Image  } from 'react-native';
import {Card, Paragraph,Title,TouchableRipple } from 'react-native-paper'


const  Home=()=>{
    return (
            <TouchableRipple onPress={()=>console.log('pressed')} RippleColor='#f0f'>
        <Card>

            {/* <Card.Title>
                <Card.Content>
                    <Title>learner</Title>
                    <Text>hi</Text>
                    <Paragraph>hi i m beginer of javascript</Paragraph>
                </Card.Content>
                <Card.Cover source={{uri:'https://picsum.photos/700'}}/>
            </Card.Title> */}
            {/* <Text style={{fontSize:22}}>Hello from home test </Text> */}
            <View style={{flex:1}}>

            
            <View style={styles.cardview}>
            <Image style={{width:150,height:111,borderRadius:15/2}}
                source={{uri:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}/>
                </View>
                <View style={styles.styletext}>
                <Text style={styles.text}>Hamar kareja</Text>
                <Text style={styles.text}>Hamar jaan</Text>
                
                
            </View>
            </View>
        </Card>
        </TouchableRipple>
       
    )   
}

const styles = StyleSheet.create({
    mycard:{
        margin:20,
        padding:5
    },
    cardView:{
        
        flex:0.2
    },
    text:{
        fontSize:20,
        marginRight:6,
        color:'#f0f',
        flexDirection:"row",
        textAlign:"center"
    },
    styletext:{
        flex:0.6,
        padding:20
    }
})
export {Home};