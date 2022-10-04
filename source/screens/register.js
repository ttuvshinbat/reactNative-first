import react from "react"
import { View, Text, Button } from "react-native"
export default function (navigation) {

    return (
        <View>
            <Text>register</Text>
            <Button onPress={() => { navigation.navigate("Login") }} title="register" />
        </View>
    )
}