import React, { useState } from "react"
import MyButton from "./component/MyButton"
import { StyleSheet, View, Text, Image, SafeAreaView, TextInput, Alert } from "react-native"
// import amazonpic from "../../assets/img/amazonpic.png"
export default function (props) {
    const [text, onChangeText] = useState("");

    const [number, onChangeNumber] = useState("");
    const loginHandler = () => {
        console.log("wait")
    }

    return (
        <View>
            {/* <SafeAreaView>
                <Image style={styles.homepic} source={require("../../assets/img/amazonPic.png")} />
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
                <MyButton title="back" onPress={() => props.navigation.pop()} />
                <MyButton title="login" onPress={loginHandler} />



            </SafeAreaView> */}
            <Text> login js</Text>
        </View>
    )


}
const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        marginVertical: 10,
        padding: 10,
        borderColor: "gray",
        borderWidth: 5,
    },
    homepic: {
        width: "100%",
        height: "50%",
    },
    button1: {

        marginVertical: 10,
        margin: 12,
    },
    text: {
        marginLeft: 11,
    }

})
