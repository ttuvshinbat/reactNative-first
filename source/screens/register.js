import React,{useState} from "react"
import {  StyleSheet, View, Text, Image, SafeAreaView, TextInput, Button } from "react-native"
export default function (props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [number, onChangeNumber] = useState(null);
    const [email, setEmail] = useState("")
    console.log(firstname)
  
    return (
        <View>
             <Image style={styles.homepic} source={require("../../assets/img/amazonPic.png")} />

            <SafeAreaView>

<Text style={styles.text} >First name</Text>
<TextInput
    style={styles.input}
    onChangeText={setFirstname}
    value={firstname}
    placeholder="First name"
/>
<Text style={styles.text} >Last name</Text>
<TextInput
    style={styles.input}
   onChangeText={setLastname}
   value={lastname}
    placeholder="Last name"
/>
<Text style={styles.text} >E mail</Text>
<TextInput
    style={styles.input}
    onChangeText={setEmail}
    value={email}
    placeholder="E mail"
/>
<Text style={styles.text}>Password</Text>
<TextInput
    style={styles.input}
    onChangeText={onChangeNumber}
    value={number}
    placeholder="password"
    keyboardType="numeric"
/>
<View style={styles.button1} ><Button title="back" onPress={() => props.navigation.pop()} /> </View>
<View style={styles.button1} ><Button title="register" onPress={() => props.navigation.pop()} /> </View>
</SafeAreaView>
          </View>
    )
    
}
const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 10,
        marginVertical: 10,
        padding: 8,
     borderColor:"gray",
        borderWidth:5,
       },
    homepic: {
        width: "100%",
        height: "50%", },
    button1: {
   
     marginVertical: 10,
     margin:10,
    },
    text:{
  margin:"auto"

   
    }

})

