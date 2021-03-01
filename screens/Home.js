import React from 'react';
import { StyleSheet, Text, View,Image, FlatList  } from 'react-native';
import {Card, Paragraph,Title,TouchableRipple,FAB } from 'react-native-paper'


const  Home=()=>{
    const data =[
        {id:1,name:"Aakash",postion:"soft developer"},
        {id:2,name:"Akash m",postion:"web developer"},
        {id:3,name:"Prithvi",postion:"soft developer"},
        {id:4,name:"Udit",postion:"hardware developer"},
        {id:5,name:"Ansh",postion:"soft developer"},
        {id:6,name:"Anish m",postion:"web developer"},
        {id:7,name:"Priti",postion:"soft developer"},
        {id:8,name:"Uttkarsh",postion:"hardware developer"},
    ]
    const renderlist = ((item)=>{
        return(
            <Card style={styles.mycard} key={item.id}>
            <View style={styles.cardview}>
            <Image style={{width:60,height:60,borderRadius:60/2}}
                source={{uri:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}/>
                
                <View style={{marginleft:10}}>
                {/*<View style={styles.styletext}>*/}
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.postion}</Text>
                </View>
                
                
            </View>
             
            </Card>
        )
    })
    return (
            <TouchableRipple onPress={()=>console.log('pressed')} RippleColor='#f0f'>
        <View>
        

            {/* <Card.Title>
                <Card.Content>
                    <Title>learner</Title>
                    <Text>hi</Text>
                    <Paragraph>hi i m beginer of javascript</Paragraph>
                </Card.Content>
                <Card.Cover source={{uri:'https://picsum.photos/700'}}/>
            </Card.Title> */}
            {/* <Text style={{fontSize:22}}>Hello from home test </Text> */}
            {/*<View style={{flex:1}}>

        { renderlist } */}
        <FlatList
            data={data}
            renderItem={({item})=>{
              return  renderlist(item)
            }}
        />
            <FAB
                style={styles.fab}
                small={false}
                theme={{colors:{accent:"red"}}}
                icon="plus"
                onPress={() =>console.log('Pressed')}
            />

            </View>
        </TouchableRipple>
       
    )   
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
        //padding:5
    },
    cardView:{
        
        flexDirection:"row",
        padding:6
    },
    fab:{
        position:"absolute",
        margin:16,
        right:0,
        bottom:0,
    },
    text:{
        fontSize:18,
        //marginRight:6,
        color:'#f0f',
        //flexDirection:"row",
        //textAlign:"center"
    },
    //styletext:{
     //   flex:0.6,
     //   padding:20
    //}
})
export {Home};