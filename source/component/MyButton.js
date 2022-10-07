import React from "react";
import { View, Button, StyleSheet } from "react-native"
export default function (props) {

    return (
        <View style={[styles.button1, props.style,]} >
            <Button style={styles.button} title={props.title} onPress={props.onPress} /></View >

    )
}
const styles = StyleSheet.create({
    button1: {
        marginVertical: 10,
        marginHorizontal: 10,
        margin: 12,

    },
    button: {
        borderRadius: 15
    }

})