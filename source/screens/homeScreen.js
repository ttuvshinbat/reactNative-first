import React, { useState } from "react"
import { Image, View, Text, Button, StyleSheet } from "react-native"
import LoginCmp from "../component/LoginCmp"
import MyButton from "../component/MyButton"
const Home = (props) => {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View>
            <Text>Welcome Amazon book store!!! </Text>
            <Image style={styles.pic} source={require("../../assets/img/homePic.jpeg")} />
            {/* <LoginCmp setPhone={setPhone} setPassword={setPassword} /> */}
            <MyButton title="login" onPress={() => props.navigation.navigate("Login")} />
            <MyButton title='Flex box' onPress={() => props.navigation.navigate("Flexbox")} />
            <MyButton title="Flat list" onPress={() => props.navigation.navigate("list")} />
            <MyButton title="Custom list" onPress={() => props.navigation.navigate("Customlist")} />
        </View>
    )

}
export default Home
const styles = StyleSheet.create({
    button1: {
        marginVertical: 10,
    },
    pic: {
        width: "100%",
        height: "50%",
    }
})