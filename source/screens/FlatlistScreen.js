import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import MyInput from "../component/MyInput"
import MyButton from "../component/MyButton"
const FlatlistScreen = (props) => {
    const [todo, setTodo] = useState([{}])
    const [additem, setAdditem] = useState("")
    const todos = todo.slice(0, 10)
    const newID = Math.floor(Math.random() * 1000000)
    var randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    var lastID = todo.length + 1;
    console.log(randomColor)

    const addNewItem = () => {
        setTodo(todo => [...todo, { title: additem, id: lastID, completed: 2 }])

    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodo(json))
    }, [])



    const Item = ({ title, completed, id }) => (

        <View style={styles.item} >
            <TouchableOpacity onPress={() => Alert.alert(`hello : ${title}`)}>
                <Text style={styles.title}>my id-{id}</Text></TouchableOpacity>

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.title}>`hello -- {completed}-- bi id iin daraa baih ystoi`</Text>
        </View >


    )

    const renderItem = ({ item, index }) => {

        return (<Item key={item.id} title={item.title} id={item.id} completed={item.userId} />
        )
    }


    return (<SafeAreaView style={styles.container}>
        <View style={styles.addContainer}>
            <MyInput placeholder="oruulah Titple aa " style={styles.addInput} onChangeText={(text) => setAdditem(text)} />
            <MyButton title="incriment" style={styles.button2} onPress={addNewItem} />
        </View>
        <FlatList
            data={todo}
            renderItem={renderItem}
            horizontal={false}
            keyExtractor={item => item.id}


        />
    </SafeAreaView>
    )
}

export default FlatlistScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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
        marginHorizontal: 10,
        flex: 1
    }
})