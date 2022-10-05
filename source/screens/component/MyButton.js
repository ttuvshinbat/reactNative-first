import React from "react";
import { View, Button, StyleSheet } from "react-native"
export default function (props) {
    console.log(props)
    console.log(props.onPress)
    return (
        <View style={styles.button1} >
            <Button title={props.title} onPress={props.onPress} /></View >

    )
}
const styles = StyleSheet.create({
    button1: {
        marginVertical: 10,
        margin: 12,
    },

})