import React, { useState } from "react"
import MyButton from "../component/MyButton"
import MyInput from "../component/MyInput";
import LoginCmp from "../component/LoginCmp";
import { StyleSheet, View, Text, Image, SafeAreaView, TextInput, Alert } from "react-native"
// import amazonpic from "../../assets/img/amazonpic.png"
export default function (props) {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState("");
    const loginHandler = () => {

    }
    return (
        <View>
            <SafeAreaView>
                <Image style={styles.homepic} source={require("../../assets/img/amazonPic.png")} />
                {/* <MyInput placeholder="name" onChangeText={onChangeText}
                    value={text} text1="Username" />
                <MyInput placeholder="log in" onChangeText={onChangeNumber} value={number} text1="Username" /> */}
                <LoginCmp />

            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({

    homepic: {
        width: "100%",
        height: "30%",
    }
})
