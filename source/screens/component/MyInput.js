import React from "react";

export default function () {
    return (<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="name"
    />

    )
}