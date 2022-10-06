import React, { useState } from "react"
import MyButton from "./MyButton"
import MyInput from "./MyInput";
import { StyleSheet, View, Text, Image, SafeAreaView, TextInput, Alert } from "react-native"
// import amazonpic from "../../assets/img/amazonpic.png"
const LoginCmp =(props) =>{
console.log(props)
    const loginHandler = (props) => {
        Alert.alert("hi")
    }
    return (
        <View>
            <SafeAreaView>
                <MyInput placeholder="phone" 
                   onChangeText={props.setPhone}  text1="Phone" />
                <MyInput onChangeText={props.setPassword}  placeholder="password"  text1="Password" />
                <MyButton title="back"  />
                <MyButton title="login" onPress={loginHandler} />
            </SafeAreaView>
            </View>
    )
}
export default LoginCmp

