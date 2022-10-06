import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native"
export default function (props) {
    console.log(props)
    return (
        <View><Text style={styles.textStyle} > {props.text1}</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="gray"
                style={styles.input}
                {...props}

            />
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
    textStyle: {
        margin: 10

    }


})