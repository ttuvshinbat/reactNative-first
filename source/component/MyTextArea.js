import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const MyTextArea = (props) => {
    return (
        <TextInput
            multiline={true}
            numberOfLines={2}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="gray"
            style={styles.input}
            {...props}
        />
    )
}

export default MyTextArea

const styles = StyleSheet.create({
    input: {
        height: 100,
        margin: 12,
        marginVertical: 10,
        padding: 10,
        borderColor: "gray",
        borderWidth: 5,
    },
})