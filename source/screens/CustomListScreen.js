import { StyleSheet, Text, View, ScrollView, } from 'react-native'
import React, { useState, useEffect } from 'react'
import MyInput from "../component/MyInput"
import MyButton from "../component/MyButton"
const CustomListScreen = () => {
    // CustomListScreen component ni nemelteer scrollView oruulj irj olon
    //  textiig deesh dooshin yvuuldag bolgoj baigaa shuud map F hereglesen ni hylbar
    // 100 data fetch hiisen baigaa hurd udah render hiihed hundreltei tsoon toonii datatai uyd hergelvel tsohistoi

    // FlatListScreen component ni flatlist compiig oruulj ir oilgohod bag
    // zereg hundreltei bolovch davuu tal ni 100 200 geh met olon data datahad
    // delgetsen deer haruulj baigaagaa l zovhon render hiij dooshoo scroldohod daraagiihiig ni render hiin
    const [todo, setTodo] = useState([{}])
    const [additem, setAdditem] = useState("")
    var lastID = todo.length + 1;
    console.log(todo)
    const addNewItem = () => {
        setTodo(todo => [...todo, { id: lastID, title: additem, userId: 1 }])
    }
    console.log(additem)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json => setTodo(json))
    }, [])
    return (
        <View >
            <Text> hello sda min</Text>
            <View style={styles.addContainer}>
                <MyInput style={styles.addInput} onChangeText={text => setAdditem(text)} />
                <MyButton style={styles.button2} title="increment" onPress={addNewItem} />
            </View>
            <ScrollView >

                {todo.map((data) => {
                    var randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
                    return (
                        <View key={data.id} style={{ ...styles.item, backgroundColor: randomColor }}  >
                            <Text>{data.id} </Text>
                            <Text>{data.title}</Text>
                            <Text>{data.body}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>


    )
}

export default CustomListScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    myList: {
        marginHorizontal: 20
    },

    item: {
        backgroundColor: "#38f5e2",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
    },
    title: {
        fontSize: 16,
    },
    addContainer: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    addInput: {
        flex: 2

    },
    button2: {
        marginHorizontal: 6,
        flex: 1,

    }
})