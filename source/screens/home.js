import React from "react"
import { Image, View, Text, Button } from "react-native"

export default function (props) {

    return (
        <View>

            <Text>Amazon</Text>
            <Button onPress={() => { props.navigation.navigate("Login") }} title="login" />
            <Button onPress={() => { props.navigation.navigate("Register") }} title="register" />
        </View>
    )
}