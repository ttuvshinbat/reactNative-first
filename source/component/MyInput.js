import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native"
export default function (props) {

    return (<TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="gray"
        {...props}
        style={[styles.input, props.style,]}
    />

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
    textStyle: {
        margin: 10
    }
})