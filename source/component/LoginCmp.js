import React, { useState } from "react"
import MyButton from "./MyButton"
import MyInput from "./MyInput";
import { StyleSheet, View, Text, Image, SafeAreaView, TextInput, Alert } from "react-native"
// import amazonpic from "../../assets/img/amazonpic.png"
const LoginCmp = (props) => {
    console.log(props)
    const loginHandler = (props) => {
        Alert.alert("hi")
    }
    return (
        <View>
            <SafeAreaView>
                <Text style={styles.textStyle}>Phone</Text>
                <MyInput placeholder="phone"
                    onChangeText={props.setPhone} />
                <Text style={styles.textStyle}>Password</Text>
                <MyInput onChangeText={props.setPassword} placeholder="password" />
                <MyButton title="back" />
                <MyButton title="login" onPress={loginHandler} />
            </SafeAreaView>
        </View>
    )
}
export default LoginCmp
const styles = StyleSheet.create({
    textStyle: {
        margin: 10
    }
})
