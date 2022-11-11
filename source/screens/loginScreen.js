import React, { useState } from "react"
import MyButton from "../component/MyButton"
import MyInput from "../component/MyInput";
import LoginCmp from "../component/LoginCmp";
import { StyleSheet, View, Text, Image, SafeAreaView, TextInput, Alert } from "react-native"
// import amazonpic from "../../assets/img/amazonpic.png"
export default function (props) {

    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState("");
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")


    const loginHandler = () => {

    }
    const phone1 = props.route.params ? props.route.params.phone : "hell"
    const password1 = props.route.params ? props.route.params.password : "hell"
    return (
        <View>
            <SafeAreaView>
                <Image style={styles.homepic} source={require("../../assets/img/amazonPic.png")} />
                {/* <MyInput placeholder="name" onChangeText={onChangeText}
                    value={text} text1="Username" />
                <MyInput placeholder="log in" onChangeText={onChangeNumber} value={number} text1="Username" /> */}
                <Text> -----{phone1}--------{password1}</Text>
                <LoginCmp navigation={props.navigation} params={props.route.params} setPassword={setPassword} setPhone={setPhone} />

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
