import React, { useState } from "react"

import { StyleSheet, View, Text, Image, SafeAreaView, TextInput, Button } from "react-native"
// import amazonpic from "../../assets/img/amazonpic.png"
export default function (props) {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null);
    
return (
        <View>
            <Image style={styles.homepic} source={require("../../assets/img/amazonPic.png")} />
            <SafeAreaView>

                <Text style={styles.text} >Username</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="name"
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="password"
                    keyboardType="numeric"
                />
                <View style={styles.button1} ><Button title="back" onPress={() => props.navigation.pop()} /> </View>
                <View style={styles.button1} ><Button title="log in" onPress={() => props.navigation.pop()} /> </View>


            </SafeAreaView>
        </View>
    )
    

}
const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        marginVertical: 10,
        padding: 10,
     borderColor:"gray",
        borderWidth:5,
       },
    homepic: {
        width: "100%",
        height: "50%", },
    button1: {
   
     marginVertical: 10,
     margin:12,
    },
    text:{
   marginLeft:11,
    }

})
