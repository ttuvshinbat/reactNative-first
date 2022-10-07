import React, { useState } from "react"
import { StyleSheet, View, Text, Image, SafeAreaView, Button } from "react-native"
import MyInput from "../component/MyInput";
import MyTextArea from "../component/MyTextArea";
export default function (props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [number, onChangeNumber] = useState("");
    const [email, setEmail] = useState("")
    return (
        <View>
            <Text>register</Text>
            <SafeAreaView>
                <Image style={styles.homepic} source={require("../../assets/img/amazonPic.png")} />
                <Text style={styles.textStyle}>First name</Text>
                <MyInput placeholder="First name" onChangeText={setFirstname}
                    value={firstname} />
                <Text style={styles.textStyle}>Last name</Text>
                <MyInput placeholder="Last name" onChangeText={setLastname}
                    value={lastname} />
                <Text style={styles.textStyle}>E-mail</Text>
                <MyInput placeholder="E mail" onChangeText={setEmail}
                    value={email} />
                <Text style={styles.textStyle}>Password</Text>
                <MyInput secureTextEntry={true} placeholder="password" onChangeText={onChangeNumber}
                    value={number}
                />
                <MyTextArea placeholder="my textArea" />
                <View style={styles.button1} ><Button title="back" onPress={() => props.navigation.pop()} /></View>
                <View style={styles.button1} ><Button title="register" onPress={() => props.navigation.pop()} /></View>

            </SafeAreaView>

        </View>
    )

}
const styles = StyleSheet.create({

    homepic: {
        width: "100%",
        height: "30%",
    },
    textStyle: {
        margin: 10
    }
})
