import React, { useState } from "react"

import { StyleSheet, View, Text, Image, SafeAreaView, TextInput, Button } from "react-native"
// import amazonpic from "../../assets/img/amazonpic.png"
export default function (props) {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null);
    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            marginVertical: 10,
            padding: 10,
            border: 1,

        },
        homepic: {
            width: "100%",
            height: "50%",


        },
        button1: {
            marginVertical: 10,
        }
    })

    return (
        <View>
            <Image style={styles.homepic} source={require("../../assets/img/amazonPic.png")} />
            <SafeAreaView>

                <Text> username</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="name"
                />
                <Text>password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="password"
                    keyboardType="numeric"
                />
                <View style={styles.button1} ><Button title="back" onPress={() => props.navigation.pop()} /> </View>
                <View><Button title="log in" onPress={() => props.navigation.pop()} /> </View>


            </SafeAreaView>
        </View>
    )

}
