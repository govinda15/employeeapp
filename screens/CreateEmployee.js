import React, { useState } from 'react';
import { StyleSheet, Text, View ,Modal  } from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const CreateEmployee = ()=>{
    const [Name,setName] =useState("");
    const [phone,setPhone] =useState("");
    const [email,setEmail] =useState("");
    const [salary,setSalary] =useState("");
    const [picture,setPicture] =useState("");
    const [modal,setModal] =useState(false);
    


    return(
        <View style={styles.root}>
              <TextInput label='Name'
                style={styles.inputStyle}
                value={Name}
                mode="outlined"
                theme={theme}
                OnChangeText={text => setName({ text})}/>

                <TextInput label='Email'
                style={styles.inputStyle}
                value={email}
                mode="outlined"
                theme={theme}
                OnChangeText={text => setEmail({ text})}/>

                <TextInput label='phone'
                style={styles.inputStyle}
                value={phone}
                keyboardType="number-pad"
                mode="outlined"
                theme={theme}
                OnChangeText={text => setPhone({ text})}/>

                <TextInput label='salary'
                style={styles.inputStyle}
                value={salary}
                mode="outlined"
                theme={theme}
                OnChangeText={text => setSalary({ text})}/>

               {/*} <TextInput label='Name'
                style={styles.inputStyle}
                value={Name}
                mode="outlined"
                theme={theme}
                OnChangeText={text => setName({ text})}/> */}

                <Button style={styles.inputStyle} icon="upload" mode="contained" onPress={() => setModal(true)}>
                    upload image
                </Button>
                <Button style={styles.inputStyle} icon="content-save" mode="contained" onPress={() => console.log("saved")}>
                    save
                </Button>
                <Modal
                animationType='slide'
                transparent={true}
                visible={modal}
                onRequestClose={()=>{
                    setModal(false)
                }}>
                    <View style={styles.modalView}>
                        <View style={styles.modalButtonView}>
                    <Button icon="camera" theme={theme} mode="contained" onPress={() => console.log("presses")}>
                        camera</Button>
                    <Button icon="image-area" mode="contained" onPress={() => console.log("presses")}>
                        Gallery </Button>
                        </View>
                    <Button onPress={() => setModal(false)}>
                    cancel
                </Button>
                    </View>

                </Modal>
        </View>

    )
}

const theme={
    colors:{
        primary:"red"
    }
}
const styles=StyleSheet.create({
    root:{
        flex:1
    },
    inputStyle:{
        margin:5
    },
    modalButtonView: {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"#b8e6ff"
    }
})


export default CreateEmployee