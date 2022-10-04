import React from "react"
import { Image, View, Text, Button, StyleSheet } from "react-native"

export default function (props) {
    const styles = StyleSheet.create({
        button1: {
            marginVertical: 10,
        } ,
        pic: {
     width:"100%",
    height: "100%",
        }
    })
    return (
        <View>
          <Text>Amazon</Text>
            <Image style={styles.pic} source={require("../../assets/img/homePic.jpeg")}/> 
            <View style={styles.button1} ><Button onPress={() => { props.navigation.navigate("Login") }} title="login" /></View>
            <View><Button onPress={() => { props.navigation.navigate("Register") }} title="register" /></View>
            
        </View>
    )
    
}
